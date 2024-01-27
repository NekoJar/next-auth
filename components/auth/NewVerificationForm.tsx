"use client";

import React, { useCallback, useEffect, useState } from "react";
import { CardWrapper } from "./CardWrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/newVerification";
import { FormSuccess } from "../FormSuccess";
import { FormError } from "../FormError";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();

  console.log(searchParams);

  const token = searchParams.get("token");

  console.log(token);

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing Token!");
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data.success);
        setError(data.error);
      })
      .catch(() => {
        setError("Something went wrong!");
      });
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirming your verification"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="flex items-center w-full justify-center">
        {!success && !error && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
