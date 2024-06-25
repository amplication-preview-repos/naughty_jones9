import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TextExtractorList } from "./textExtractor/TextExtractorList";
import { TextExtractorCreate } from "./textExtractor/TextExtractorCreate";
import { TextExtractorEdit } from "./textExtractor/TextExtractorEdit";
import { TextExtractorShow } from "./textExtractor/TextExtractorShow";
import { PdfFileList } from "./pdfFile/PdfFileList";
import { PdfFileCreate } from "./pdfFile/PdfFileCreate";
import { PdfFileEdit } from "./pdfFile/PdfFileEdit";
import { PdfFileShow } from "./pdfFile/PdfFileShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { MachineLearningProcessList } from "./machineLearningProcess/MachineLearningProcessList";
import { MachineLearningProcessCreate } from "./machineLearningProcess/MachineLearningProcessCreate";
import { MachineLearningProcessEdit } from "./machineLearningProcess/MachineLearningProcessEdit";
import { MachineLearningProcessShow } from "./machineLearningProcess/MachineLearningProcessShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { UploadedFileList } from "./uploadedFile/UploadedFileList";
import { UploadedFileCreate } from "./uploadedFile/UploadedFileCreate";
import { UploadedFileEdit } from "./uploadedFile/UploadedFileEdit";
import { UploadedFileShow } from "./uploadedFile/UploadedFileShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"PDF Processing Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="TextExtractor"
          list={TextExtractorList}
          edit={TextExtractorEdit}
          create={TextExtractorCreate}
          show={TextExtractorShow}
        />
        <Resource
          name="PdfFile"
          list={PdfFileList}
          edit={PdfFileEdit}
          create={PdfFileCreate}
          show={PdfFileShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="MachineLearningProcess"
          list={MachineLearningProcessList}
          edit={MachineLearningProcessEdit}
          create={MachineLearningProcessCreate}
          show={MachineLearningProcessShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="UploadedFile"
          list={UploadedFileList}
          edit={UploadedFileEdit}
          create={UploadedFileCreate}
          show={UploadedFileShow}
        />
      </Admin>
    </div>
  );
};

export default App;
