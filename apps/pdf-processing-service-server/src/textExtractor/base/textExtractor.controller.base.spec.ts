import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { TextExtractorController } from "../textExtractor.controller";
import { TextExtractorService } from "../textExtractor.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cleanedTxtContent: "exampleCleanedTxtContent",
  createdAt: new Date(),
  extractedAt: new Date(),
  id: "exampleId",
  txtContent: "exampleTxtContent",
  updatedAt: new Date(),
};
const CREATE_RESULT = {
  cleanedTxtContent: "exampleCleanedTxtContent",
  createdAt: new Date(),
  extractedAt: new Date(),
  id: "exampleId",
  txtContent: "exampleTxtContent",
  updatedAt: new Date(),
};
const FIND_MANY_RESULT = [
  {
    cleanedTxtContent: "exampleCleanedTxtContent",
    createdAt: new Date(),
    extractedAt: new Date(),
    id: "exampleId",
    txtContent: "exampleTxtContent",
    updatedAt: new Date(),
  },
];
const FIND_ONE_RESULT = {
  cleanedTxtContent: "exampleCleanedTxtContent",
  createdAt: new Date(),
  extractedAt: new Date(),
  id: "exampleId",
  txtContent: "exampleTxtContent",
  updatedAt: new Date(),
};

const service = {
  createTextExtractor() {
    return CREATE_RESULT;
  },
  textExtractors: () => FIND_MANY_RESULT,
  textExtractor: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("TextExtractor", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: TextExtractorService,
          useValue: service,
        },
      ],
      controllers: [TextExtractorController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /textExtractors", async () => {
    await request(app.getHttpServer())
      .post("/textExtractors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        extractedAt: CREATE_RESULT.extractedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /textExtractors", async () => {
    await request(app.getHttpServer())
      .get("/textExtractors")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          extractedAt: FIND_MANY_RESULT[0].extractedAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /textExtractors/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/textExtractors"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /textExtractors/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/textExtractors"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        extractedAt: FIND_ONE_RESULT.extractedAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /textExtractors existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/textExtractors")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        extractedAt: CREATE_RESULT.extractedAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/textExtractors")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
