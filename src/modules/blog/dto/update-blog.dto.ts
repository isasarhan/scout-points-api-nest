import {CreateBlogArgs } from "./create-blog";
import { PartialType } from "@nestjs/mapped-types";

export class UpdateBlogArgs extends PartialType(CreateBlogArgs) {}
