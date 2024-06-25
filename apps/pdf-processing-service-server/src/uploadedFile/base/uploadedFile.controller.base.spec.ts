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
import { UploadedFileController } from "../uploadedFile.controller";
import { UploadedFileService } from "../uploadedFile.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  createdAt: new Date(),
  fileName: "exampleFileName",
  fileSize: 42,
  id: "exampleId",
  updatedAt: new Date(),
  uploadDate: new Date(),
};
const CREATE_RESULT = {
  createdAt: new Date(),
  fileName: "exampleFileName",
  fileSize: 42,
  id: "exampleId",
  updatedAt: new Date(),
  uploadDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    createdAt: new Date(),
    fileName: "exampleFileName",
    fileSize: 42,
    id: "exampleId",
    updatedAt: new Date(),
    uploadDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  createdAt: new Date(),
  fileName: "exampleFileName",
  fileSize: 42,
  id: "exampleId",
  updatedAt: new Date(),
  uploadDate: new Date(),
};

const service = {
  createUploadedFile() {
    return CREATE_RESULT;
  },
  uploadedFiles: () => FIND_MANY_RESULT,
  uploadedFile: ({ where }: { where: { id: string } }) => {
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

describe("UploadedFile", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: UploadedFileService,
          useValue: service,
        },
      ],
      controllers: [UploadedFileController],
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

  test("POST /uploadedFiles", async () => {
    await request(app.getHttpServer())
      .post("/uploadedFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        uploadDate: CREATE_RESULT.uploadDate.toISOString(),
      });
  });

  test("GET /uploadedFiles", async () => {
    await request(app.getHttpServer())
      .get("/uploadedFiles")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          uploadDate: FIND_MANY_RESULT[0].uploadDate.toISOString(),
        },
      ]);
  });

  test("GET /uploadedFiles/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/uploadedFiles"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /uploadedFiles/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/uploadedFiles"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        uploadDate: FIND_ONE_RESULT.uploadDate.toISOString(),
      });
  });

  test("POST /uploadedFiles existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/uploadedFiles")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        uploadDate: CREATE_RESULT.uploadDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/uploadedFiles")
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