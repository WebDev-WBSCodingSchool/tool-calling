import { Router } from 'express';
import { createCompletion } from '#controllers';
import { validateBody } from '#middleware';
import { promptBodySchema } from '#schemas';

const completionRoutes = Router();
completionRoutes.use(validateBody(promptBodySchema));

completionRoutes.post('/chained-prompt', createCompletion);

export default completionRoutes;
