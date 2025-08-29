import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HistorySection() {
  return (
    <Box
      sx={{
        mx: 'auto', // 水平方向中央寄せ
        px: 2, // スマホでも端が詰まらないようにpadding
        py: 6, // 上下の余白
        textAlign: 'center', // 中央揃え
        backgroundColor: '#fdf8f5', // 背景色（画像の色に近い柔らかい色）
        color: '#3b322f', // テキストの色（画像の色に合わせて濃いめのブラウン）
        fontFamily: 'Georgia, serif', // フォントの雰囲気を合わせるならセリフ体
      }}
    >
      <Typography variant="h5" component="h2" fontWeight="bold" mb={3}>
        ナポリピザの歴史
      </Typography>
      <Typography
        variant="body1"
        component="p"
        lineHeight={1.7}
        sx={{
          maxWidth: '700px', // 任意の制限幅（px / rem / % でもOK）
          mx: 'auto', // 水平方向に中央寄せ
          fontSize: '20px',
        }}
      >
        ナポリピザはイタリアのナポリ発祥の料理の象徴であり、その歴史は18世紀にまでさかのぼります。もともとはラード、塩、ニンニクをのせたシンプルな平たいパンでしたが、新大陸からトマトが導入されて進化しました。19世紀末には、サヴォイア王妃マルゲリータを讃えて、赤（トマト）、白（モッツァレラ）、緑（バジル）でイタリア国旗を表現したクラシックなマルゲリータピザが誕生しました。現在では、ナポリピザはシンプルさ、良質な材料、そして高温の薪窯で焼く伝統的な調理法で世界中に愛されています。
      </Typography>
    </Box>
  );
}
