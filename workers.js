addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);

  // 检查是否访问 /titles/FCL/Update/version_map.json 路径
  if (url.pathname === '/titles/FCL/Update/version_map.json') {
    // 创建要返回的JSON数据
    const jsonData = [
      {
        "type": "release",
        "versionCode": 12987,
        "versionName": "1.2.9.8.7",
        "date": "2026.5.19",
        "description": [
          {
            "lang": "en",
            "text": "优化水印"
          },
          {
            "lang": "zh_CN",
            "text": "优化水印"
          }
        ],
        "netdiskUrl": "https://gh-proxy.org/https://github.com/xiaoniao427/FoldCraftLauncher-PBlossom/releases/download/1.2.9.8.7/FCL-release-1.2.9.8.7-all.apk",
        "url": "https://gh-proxy.org/https://github.com/xiaoniao427/FoldCraftLauncher-PBlossom/releases/download/1.2.9.8.7/FCL-release-1.2.9.8.7-all.apk"
      }
    ];

    // 返回JSON响应
    return new Response(JSON.stringify(jsonData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 允许跨域
        'Cache-Control': 'public, max-age=3600' // 缓存1小时
      }
    });
  }

  // 检查是否访问 /titles/FCL/Releases_Version/1.2.4.5/announcement.txt 路径
  if (url.pathname === '/titles/FCL/Releases_Version/1.2.4.5/announcement.txt') {
    // 创建要返回的JSON数据
    const announcementData = {
      "id": 8,
      "significant": true,
      "outdated": false,
      "minVersion": -1,
      "maxVersion": -1,
      "specificLang": [],
      "title": [
        {
          "lang": "en",
          "text": "关于客户端"
        },
        {
          "lang": "zh_CN",
          "text": "关于客户端"
        }
      ],
      "date": "2026.5.19",
      "content": [
        {
          "lang": "en",
          "text": "1.2.9.8.7更新：\n优化水印\n开源地址：https://github.com/xiaoniao427/FoldCraftLauncher-PBlossom/\n客户端开发者赞助地址：https://ifdian.net/@tzhd427"
        },
        {
          "lang": "zh_CN",
          "text": "1.2.9.8.7更新：\n优化水印\n开源地址：https://github.com/xiaoniao427/FoldCraftLauncher-PBlossom/\n客户端开发者赞助地址：https://ifdian.net/@tzhd427"
        }
      ]
    };

    // 返回JSON响应（虽然路径是.txt，但内容格式是JSON）
    return new Response(JSON.stringify(announcementData, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*', // 允许跨域
        'Cache-Control': 'public, max-age=3600' // 缓存1小时
      }
    });
  }

  // 如果不是目标路径，可以返回其他响应
  return new Response('Not Found.你在看啥，这里没有你想要的东西', {
    status: 404,
    headers: { 'Content-Type': 'text/plain' }
  });
}
