// 默认配置文件, 集成了多个系统的默认配置
module.exports = {
  port    : 80,
  cluster : false,


  // 如果启用了这个选项, 首次运行时配置文件会被复制到这个路径
  // 之后总是从这个配置文件中读取配置
  // ext_config_file : '/usr/local/config.json'


  // from [logger-lib]
  logger : {
    // ALL, TRACE, DEBUG, INFO, WARN, ERROR, FATAL, MARK, OFF
    logLevel : 'ALL',

    // 相对于项目目录的日志文件目录
    log_dir  : 'logs',

    // 达到 log_size 后文件分块
    log_size : 20 * 1024 * 1024, // 20MB

    // 文件分块后, 最多保留几个分块文件
    reserve_count : 10, 
    
    create_dir: true,

    // 写 kfk 日志时需要的参数
    kfk_log: {
    }
  },

  // form [dcip-prj]
  dcip : {
    // udp 广播端口
    port : 19818,
    // 数据加密密码
    pass : 'abcdefg',
  },


  // from [cache-redis-lib]
  // redis_conf: {
  //   host: "192.168.7.12",
  //   port: "6370",
  //   db: 1,
  //   options: {
  //     enable_offline_queue: true,
  //     max_attempts: 3,
  //     auth_pass: null
  //   },
  //   defaultExpiration: 7200
  // },


  // from [communication-prj]
  // 允许有多个发件服务器备用
  // mail_sender: [{
  //   host: 'smtp.163.com',
  //   port: 25,
  //   debug: module.exports=='development',
  //   secure: false,
  //   // 通常, 发件人要求是 auth 中登录用户的账户
  //   send_user: 'yanming1-163@163.com',
  //   // https://github.com/andris9/nodemailer-smtp-transport#authentication
  //   auth: {
  //     user: 'yanming1-163',
  //     pass: '12345678'
  //   }
  // }],


  // from [communication-prj]
  // sms: {
  //  sms_webchinese_cn: {
  //    // 登录用户名
  //    uid: 'zy_test_sms',
  //    // api 调用密钥
  //    key: '2d19b7a1fc6da2c87b8b',
  //    // 短信末尾签名
  //    sign: 'ZY-ORG-YUN'
  //  }
  // },
  

  // from [log-srv-prj]
  // kfk_server: {
  //    zookeeper_server: '192.168.7.228:2181',
  //    connect_delay: 10 * 1000,
  //    consumer_option: { 
  //      autoCommit: true, 
  //      fromBeginning: false, 
  //      fetchMaxWaitMs: 1000, 
  //      fetchMaxBytes: 1024*1024 
  //    }
  //  }
  
};
