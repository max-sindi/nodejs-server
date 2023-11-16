import express from 'express'
import chat from 'src/controllers/chat'
const router = express.Router();

router.use('/chat', chat)

export default router