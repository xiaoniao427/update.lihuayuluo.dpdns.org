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
        "versionCode": 12842,
        "versionName": "1.2.8.4.2",
        "date": "2026.02.13",
        "description": [
          {
            "lang": "en",
            "text": "修复bug"
          },
          {
            "lang": "zh_CN",
            "text": "修复bug"
          }
        ],
        "netdiskUrl": "https://gh-proxy.org/https://github.com/xiaoniao427/FCL-PBlossom/releases/download/v1.2.8.4.2/FCL-release-1.2.8.4.2-arm64-v8a.Apk",
        "url": "https://github.com/xiaoniao427/FCL-PBlossom/releases/latest"
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
    // 创建要返回的JSON数据（按照你提供的格式）
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
          "text": "About PBlossom"
        },
        {
          "lang": "zh_CN",
          "text": "关于服务器"
        }
      ],
      "date": "2026.2.30",
      "content": [
        {
          "lang": "en",
          "text": "提前祝您新年快乐！"
        },
        {
          "lang": "zh_CN",
          "text": "提前祝您新年快乐！"
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