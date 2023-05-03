# docker-compose

= 다중 컨테이너 앱을 실행하기 위한 도구.

`docker-compose.yaml` 파일로 시스템을 구성한다.

## 실행하기

```sh
docker-compose up --build -d
```

### options

- `--build` : 이미지를 항상 새로 빌드. 옵션이 없으면, 이미지가 없을때만 빌드
- `-d`: 백그라운드로 실행

## 중단하기

```sh
docker-compose down
```
