# nodejs docker example

## 도커 이미지 빌드하기

`-t` 옵션으로 이미지 이름을 지정해서 빌드한다.

```sh
docker build . -t <your username>/node-web-app
```

## 빌드한 이미지로 서버 실행하기

도커 컨테이너는 기본적으로 NAT(Network Address Translation) 환경이므로 Private IP만 가지고 있기 때문에, 기본적으로는 컨테이너 외부에서 접근이 불가능하다. 외부에서 접근할 수 있도록 하려면 포트포워딩을 해주어야 하고, 이는 `-p` 옵션으로 지정할 수 있다.

12000번 포트로 접근할 수 있도록 `-p 12000:10000` 을 적용해 포트포워딩 설정을 해서 이미지를 실행한다

```sh
docker run -p 12000:10000 -d <your username>/node-web-app
```
