import express from "express";
import {getUser, createUser, findUsers, deleteUser, updateUser} from "../controllers/users.js"
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

router.get("/",getUser);


router.post("/",createUser);


router.get("/:id",findUsers);

router.delete("/:id",deleteUser);

router.patch("/:id",updateUser);

export default router;