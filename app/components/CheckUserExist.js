import React from "react";

import {
  CoreForm,
  CoreLayoutItem,
  coreUseNavigate
} from "@wrappid/core";
import { useSelector } from "react-redux";

import AuthLayout from "./layout/AuthLayout";

export default function CheckUserExist() {
  const auth = useSelector(state => state.auth);
  const navigate = coreUseNavigate();
  const { checkLoginOrRegisterSuccess, authNextPage } = auth;

  React.useEffect(() => {
    if (checkLoginOrRegisterSuccess && authNextPage !== "checkuserexists") {
      navigate(`/${authNextPage}`);
    }
  }, [authNextPage]);

  return (
    <>
      <CoreLayoutItem id={AuthLayout.PLACEHOLDER.CONTENT}>
        <CoreForm
          formId="checkUserExist"
          mode="edit"
          authenticated={false}
        />
      </CoreLayoutItem>
    </>
  );
}
