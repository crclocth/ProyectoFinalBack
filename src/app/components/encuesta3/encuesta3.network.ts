import express,{ Router, Response, Request } from "express"
import { Encuesta3 } from "../../models/encuesta3.model";
import responseModule from "../../modules/response.module";
import encuesta3Controller from "./encuesta3.controller";

const router: Router = express.Router();

router.get("/all", async function(req: Request, res: Response){

    try {
        const result: Encuesta3[] = await encuesta3Controller.getEncuesta3();
        responseModule.success(req,res,result);

    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }

});

router.get("/:id", async function(req: Request, res: Response){
    const id: string = req.params['id'];
    try {
        const result: Encuesta3 | null = await encuesta3Controller.getEncuesta3ById(id);
        responseModule.success(req,res,result);

    } catch (error) {
        console.log(error);
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add", async function(req: Request, res: Response){

    const body: Encuesta3 = req.body;
    try {
        const result: Encuesta3 = await encuesta3Controller.addEncuesta3(body);
        responseModule.success(req,res,result,201);    
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});


router.delete("/delete", async function (req: Request, res: Response) {
    try {
      const ver = await encuesta3Controller.deleteEncuesta3(req.body._id);
      if (ver != null) {
        responseModule.success(req, res, "Delete Success", 200);
      } else {
        responseModule.success(req, res, "Delete Failed");
      }
    } catch (error) {
      responseModule.error(req, res, "Error desconocido");
    }
  });

router.patch("/:id", async function(req: Request, res: Response){
    const { id } = req.params;
    try {
        const modPaciente = await encuesta3Controller.patchEncuesta3(id, req.body);
        responseModule.success(req,res,modPaciente,201);    
    } catch (error) {
        console.log(id);
        responseModule.error(req,res,"Error desconocido");
    }
});

export default router;