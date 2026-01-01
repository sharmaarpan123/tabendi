import api from "@/lib/axios";
import URLS from "./urls";
import { ContactUsData } from "@/Types/types";

export const contactUsApi = async (data: ContactUsData) => api.post(URLS.CONTACT_US, data);
