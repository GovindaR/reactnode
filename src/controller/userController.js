import express from 'express';
import { compare, hash } from '../utils/crypt';
import * as driverService from '../service/user';

const router = express();

router.get('/', async (req, res, next) => {
  const password = await hash('testing');
  console.log('tet', password);

  console.log(await compare('test', password));

  driverService
    .getAllUsers()
    .then(data => {
      console.log(data);

      // long hand
      // res.status(200).send({ data: data});

      // short hand
      res.status(200).send({ data });
    })
    .catch(err => next(err));
});

// id pass
router.get('/:id', (req, res, next) => {
  driverService
    .getUsersId(req.params.id)
    .then(data => {
      console.log(data);

      // long hand
      // res.status(200).send({ data: data});

      // short hand
      res.status(200).send({ data });
    })
    .catch(err => next(err));
});

/**
 * Login
 */
router.post('/', (req, res, next) => {
  driverService
    .login(req.body)
    .then(data => {
      if (data) {
        res.status(200).json({ status: '200', message: data });
      }

      res
        .status(404)
        .json({ status: '404', message: 'Password/Username is not correct' });

      // long hand
      // res.status(200).send({ data: data});

      // short hand
    })
    .catch(err => next(err));
});

// post
router.post('/', (req, res, next) => {
  console.log('body', req.body);
  driverService
    .getUsersAdd(req.body)
    .then(data => {
      console.log(data);

      // long hand
      // res.status(200).send({ data: data});

      // short hand
      res.status(200).send({ data });
    })
    .catch(err => next(err));
});
export default router;
