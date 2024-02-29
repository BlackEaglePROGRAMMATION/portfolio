const express = require('express');
const auth = require('../config/auth');
const multer = require('./../config/multer');

const { fetchProject, createProject, putProject, deleteProject } = require('../controllers/project');

const router = express.Router();

router.get('/', fetchProject);
router.post('/', multer, createProject);
router.put('/:id', auth, multer, putProject);
router.delete('/:id', auth, multer, deleteProject);

module.exports = router;