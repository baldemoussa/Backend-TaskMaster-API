const router = require('express').Router();
const { authMiddleware } = require('../../utils/auth');
const taskController = require('../../controllers/taskController');

router.use(authMiddleware);

router.put('/:taskId', taskController.updateTask);
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
