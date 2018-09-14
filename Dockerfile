

RUN mkdir -p /usr/mizenetwork
COPY . /usr/mizenetwork/
WORKDIR /usr/mizenetwork
RUN npm install --production

EXPOSE 3000

CMD ["npm", "start"]
