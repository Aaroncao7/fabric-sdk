# fabric-sdk


## request
- nodejs
- npm
### 修改 /etc/hosts
添加
```shell
39.103.132.74 ca.orderOrg.miit2org
39.103.132.74 ca.org1.miit2org
8.142.50.225 peer1.org1.miit2org
39.103.132.74 orderer.orderOrg.miit2org
39.101.177.195 ca.org2.miit2org
39.101.177.195 peer2.org2.miit2org

```

## commands

- to install dependency: `npm i`

## 存证

- to run the fabric sdk: `node index.js`
```javascript
  const result = await contract.submitTransaction("put", ["test"]);
```
### 返回存证数据的hash
## 查看存证
```javascript
  const result = await contract.submitTransaction("get", ["03347a7f49bd3b6b94b759986bd31b421bb82f9aad365934db732960f99eed85"]);

```