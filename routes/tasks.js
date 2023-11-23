const { Router } = require("express");
const router = Router();
const { validarJWT } = require("../middlewares/validateTokens");
const {listTask, createTask, updateTask, deleteTask} = require('../Controllers/task')

router.use(validarJWT)

router.get('/',listTask)
router.post('/',createTask)
router.put('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router; 