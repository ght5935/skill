const express = require('express');
const { runDouyin } = require('./core');
// const fs = require('fs');
const app = express();
const port = 3000;
app.get('/dy', async (req, res) => {
  if (req.query.url) {
    try {
      const { videoStream, share_title } = await runDouyin(req.query.url);
      res.attachment(`${share_title}(无水印).mp4`);
      videoStream.pipe(res);
    } catch (e) {
      console.log(e);
      res.send('错误: ' + e);
    }
  } else {
    res.send('url错误');
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
