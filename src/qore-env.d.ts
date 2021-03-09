// [WARNING] This file is generated by running `$ qore codegen` on your root project, please do not edit

/// <reference types="@feedloop/qore-client" />
import { QoreSchema } from "@feedloop/qore-client";

declare module "@feedloop/qore-client" {
  type FeedbackTableRow = {
    id: string;
    description: string;
    title: string;
    vote: number;
    createdBy: CreatedByTableRow;
    slug: string;
    createdAt: Date;
    status: "ON PROGRESS" | "DONE" | "ICEBOX" | "TODO";
  };

  type MemberTableRow = {
    id: string;
    email: string;
    role: { id: string; displayField: string };
    feedback: { nodes: FeedbackTableRow[] };
  };

  type AllMemberViewRow = {
    read: {
      id: string;
      email: string;
      role: { id: string; displayField: string };
    };
    write: {
      email: string;
    };
    params: {};
    actions: {};
    forms: {
      formMember: {
        email?: string;
        role?: string;
      };
    };
  };

  type AllFeedbackViewRow = {
    read: {
      id: string;
      title: string;
      description: string;
      vote: number;
      createdBy: CreatedByTableRow;
      slug: string;
      createdAt: Date;
      status: "ON PROGRESS" | "DONE" | "ICEBOX" | "TODO";
    };
    write: {
      title: string;
      description: string;
      vote: number;
      createdBy: string[];
      slug: string;
      createdAt: Date;
      status: "ON PROGRESS" | "DONE" | "ICEBOX" | "TODO";
    };
    params: {};
    actions: {};
    forms: {
      feedbackForm: {
        title: string;
        description: string;
        createdBy: string[];
      };
    };
  };

  type ProjectSchema = {
    allMember: AllMemberViewRow;
    allFeedback: AllFeedbackViewRow;
  };
}