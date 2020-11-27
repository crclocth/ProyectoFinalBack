import {Express} from "express";
import admin from "./admin";

const components: Express[] = [
    admin,
];

export default components;