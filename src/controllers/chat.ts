import {response} from "express"

const express = require('express');
const router = express.Router();

router.get('/meta', (req, res) => {
  console.log('We are in chat router')
  res.send("OK")
})



export default router