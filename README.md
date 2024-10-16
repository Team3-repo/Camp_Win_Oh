
# myphpadmin

- ALTER TABLE orderlist DROP FOREIGN KEY FK_user_name12;

# 前端

`choco install ngrok`

`ngrok http 3000`

`ssh -R 80:localhost:3000 serveo.net`

### replace
`.......localhost:3005`
`https://e53cdd07e68ecd2d43b5ca9357a5f44e.serveo.net`

### next.config.mjs
```mjs
domains: ['i.ytimg.com','localhost','e53cdd07e68ecd2d43b5ca9357a5f44e.serveo.net'],
```

# 後端
`ssh -R 80:localhost:3005 serveo.net`

### replace
`.......localhost:3000`

`https://e53cdd07e68ecd2d43b5ca9357a5f44e.serveo.net`