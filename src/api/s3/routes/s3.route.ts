import { Router } from 'express';
import multer from 'multer';

import { handleServiceResponse } from '@/utils/http-handlers.util';
import { sleep } from '@/utils/sleep.util';

const upload = multer({ dest: 'uploads/' });

export const s3Router: Router = (() => {
  const router = Router();

  router.post('/upload', upload.single('file'), async (req, res) => {
    await sleep(1000);

    handleServiceResponse(
      {
        data: {
          url: 'https://growby-novasec-s3-file-dev.s3.amazonaws.com/c3779eb4-14da-4889-8d3f-f077bda5138f.jpg',
          fileName: 'c3779eb4-14da-4889-8d3f-f077bda5138f.jpg',
          size: 1024,
        },
        message: 'Archivo subido exitosamente',
        statusCode: 200,
      },
      res
    );
  });

  return router;
})();
