<4주차>
-docker
  -fail2ban : 무차별 공격 방어 툴
  -front : nginx(proxy) + modsecurity(웹 방화벽)
  -mysql : mysql컨테이너 생성 시 초기값
-log
  -log : fail2ban, modsecurity 로그
  -logs : nginx의 access.log, error.log 로그
-www
  -back : node.js 백앤드
  -front : react 프론트앤드

* docker-compose.yml : front_nginx + frontend + backend + mysql_serv + phpmyadmin_serv + adminer 생성