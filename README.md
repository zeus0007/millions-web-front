밀리언즈 웹 프로젝트 입니다.

## 설치 & 동작

본인이 원하는 폴더에서 터미널을 켜고, 다음 명령어를 <b>순서대로</b> 실행해서 깃허브에서 코드를 내려받습니다.

### `git init`
### `git clone add origin https://github.com/zeus0007/millionswebfront.git`
### `cd millionswebfront`
### `npm install`
### `src폴더안에 environment.js를 생성`
### `아래 내용을 입력 후 저장` 
import config from "./config.json";

const ENV_MAP = {
  development: {
    BACKEND_HOST: "http://본인로컬ip:8000"
  },
  staging: {},
  production: {}
};

export default ENV_MAP[config.REACT_NATIVE_ENV] || ENV_MAP.development;

* 본인의 로컬 ip는 ipconfig나 ifconfig를 통해서 각자 찾으세요.
* 장고 백엔드를 돌리지 않고 실행하고 싶으면 ""공백으로 남겨 놓으세요.

### `npm start`