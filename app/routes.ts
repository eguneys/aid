import express from 'express';
import multer from 'multer';
import wireCtrls from './wireCtrls';
let upload = multer();

export default function routes(c: wireCtrls) {
  const router = express.Router();

  router.get('/auth', c.auth.login.bind(c.auth));
  router.get('/auth/guest', c.auth.guest.bind(c.auth));

  
  router.get('/editor', c.site.editor.bind(c.site));

  router.get('/book/:bookId', c.book.book.bind(c.book));
  router.get('/books', c.book.all.bind(c.book));
  router.post('/books', upload.none(), c.book.add.bind(c.book));

  router.get('/chapter/:chapterId', c.book.chapter.bind(c.book));
  router.get('/chapters/:bookId', c.book.chapters.bind(c.book));
  router.post('/chapters', upload.none(), c.book.addChapter.bind(c.book));
  router.get('/sections/:chapterId', c.book.sections.bind(c.book));
  router.post('/sections', upload.none(), c.book.addSection.bind(c.book));

  router.get('/contents/:sourceId', c.book.contents.bind(c.book));
  router.post('/contents', upload.none(), c.book.addContent.bind(c.book));
  router.post('/contents/:contentId', upload.none(), c.book.updateContent.bind(c.book));
  
  

  router.use(c.site.notFound.bind(c.site));

  router.use((err: any, req: any, res: any, next: any) => {
    res.status(500).send(err.message);
  });

  return router;  
}
