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
        The History of Neapolitan Pizza
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
        Neapolitan pizza, a culinary icon originating from Naples, Italy, boasts
        a rich history dating back to the 18th century. Initially a simple
        flatbread topped with lard, salt, and garlic, it evolved with the
        introduction of tomatoes from the New World. By the late 19th century,
        the classic Margherita pizza emerged, honoring Queen Margherita of Savoy
        with its red (tomato), white (mozzarella), and green (basil) toppings,
        mirroring the Italian flag. Today, Neapolitan pizza is celebrated
        globally for its simplicity, quality ingredients, and traditional
        preparation methods, including baking in a wood-fired oven at high
        temperatures.
      </Typography>
    </Box>
  );
}
