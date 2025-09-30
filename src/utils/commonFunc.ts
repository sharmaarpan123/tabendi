/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from "axios";
import React from "react";
import { toast } from "react-toastify";

// ✅ Helper to read cookies (works in browser)
export const getCookie = (name: string): string | null => {

    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
    return null;
}


// A generic async function type
type AsyncFn<Args extends any[] = any[], Return = any> = (
    ...args: Args
) => Promise<Return>;

interface CatchAsyncOptions {
    setLoader?: (loading: boolean) => void;
    callBack?: () => void;
}

export const catchAsync =
    <Args extends any[], Return>(
        fn: AsyncFn<Args, Return>,
        { setLoader, callBack }: CatchAsyncOptions = {}
    ) =>
        (...args: Args): Promise<Return | void> =>
            fn(...args)
                .catch((error: any) => {
                    toast.dismiss();
                    toast.error(error?.response?.data?.message || "something went wrong");
                    setLoader?.(false);
                    callBack?.();
                    console.error(error, "error");
                })
                .finally(() => {
                    setLoader?.(false);
                });

const removeUnderScoreAndCapitalFirstLetter = (str: string) => {
    if (!str) return "";
    const withSpaces = str.replace(/_/g, " ");
    return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1).toLowerCase();
};

export const checkResponse = ({
    res,
    setData,
    setTotal,
    showSuccess,
    dataToSet,
    setLoader,
    totalCount,
    showError = true,
}: {
    res: AxiosResponse,
    setData?: React.Dispatch<React.SetStateAction<any>>,
    setTotal?: React.Dispatch<React.SetStateAction<any>>,
    showSuccess?: boolean,
    dataToSet?: React.Dispatch<React.SetStateAction<any>>,
    setLoader?: (loading: boolean) => void,
    totalCount?: number,
    showError?: boolean
}) => {

    if (res?.status == 200) {
        if (res?.data?.status === "failure") {
            if (showError) {
                toast.dismiss();
                toast.error(
                    removeUnderScoreAndCapitalFirstLetter(
                        (typeof res?.data?.data == "string" ? res?.data?.data : null) ||
                        res?.data?.message
                    ) || "Something went wrong!"
                );
            }
            console.log(res?.data?.message, "Error in check response");
            if (setLoader) {
                setLoader(false);
            }
            return false;
        }
        if (setData) setData((dataToSet && dataToSet(res?.data)) || res?.data?.data);
        if (setTotal) setTotal(totalCount || res?.data?.totalcount);

        if (showSuccess) {
            toast.dismiss();
            toast.success(removeUnderScoreAndCapitalFirstLetter(res?.data?.message));
        }

        if (setLoader) setLoader(false);
        return true;
    } else {
        if (showError) {
            toast.dismiss();
            toast.error(
                removeUnderScoreAndCapitalFirstLetter(
                    (typeof res?.data?.data == "string" ? res?.data?.data : null) ||
                    res?.data?.message
                ) || "Something went wrong!"
            );
        }
        console.log(res?.data?.message, "Error in check response");
        if (setLoader) setLoader(false);
        return false;
    }
};




export const detectUserTimezone = () => {
    try {
        // Use Intl.DateTimeFormat to get the user's timezone
        const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return timezone || "America/New_York"; // Fallback if detection fails
    } catch (error) {
        console.warn("Failed to detect timezone:", error);
        return "America/New_York"; // Fallback timezone
    }
};
