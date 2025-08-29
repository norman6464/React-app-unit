import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const reviews = [
  {
    name: 'Sophia Rossi',
    class: 'Class of 2023',
    rating: 5,
    comment: `"This class was an absolute dream! Chef Luca's passion is contagious. The pizza we made was the best I've ever tasted."`,
    avatarUrl: '/path/to/sophia.jpg',
  },
  {
    name: 'Marco Bianchi',
    class: 'Class of 2023',
    rating: 5,
    comment: `"Took my skills to a whole new level. The techniques were exceptional, and the atmosphere was incredibly welcoming. Highly recommend!"`,
    avatarUrl: '/path/to/marco.jpg',
  },
  {
    name: 'Isabella Conti',
    class: 'Class of 2023',
    rating: 4.5,
    comment: `"The highlight of my trip to Naples. Chef Luca is a fantastic teacher. Left with confidence to recreate authentic Neapolitan pizza."`,
    avatarUrl: '/path/to/isabella.jpg',
  },
];

function Stars({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <Box sx={{ display: 'flex', gap: 0.5, color: '#d35400', mb: 1 }}>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={i} fontSize="medium" />
      ))}
      {halfStar && (
        <StarIcon
          fontSize="medium"
          sx={{
            clipPath: 'inset(0 50% 0 0)',
            WebkitClipPath: 'inset(0 50% 0 0)',
          }}
        />
      )}
      {[...Array(emptyStars)].map((_, i) => (
        <StarBorderIcon key={i} fontSize="medium" />
      ))}
    </Box>
  );
}

export default function ReviewSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <Box sx={{ py: 8, backgroundColor: '#fdf8f5', textAlign: 'center' }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        mb={8}
        sx={{ fontSize: { xs: '2.5rem', md: '3rem' } }}
      >
        Voices of Our Pizzeria Pros
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 6,
          flexWrap: 'wrap',
        }}
      >
        {reviews.map(
          ({ name, class: className, rating, comment, avatarUrl }, index) => (
            <Box
              key={name}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              sx={{
                width: 400,
                bgcolor: '#fff',
                borderRadius: 3,
                boxShadow: 4,
                p: 4,
                textAlign: 'left',
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                transition: 'transform 0.3s ease',
                transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={avatarUrl}
                  sx={{ width: 64, height: 64, mr: 2, fontSize: '2rem' }}
                >
                  {name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography
                    fontWeight="bold"
                    variant="h6"
                    sx={{ fontSize: { xs: '1.3rem', md: '1.6rem' } }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
                  >
                    {className}
                  </Typography>
                </Box>
              </Box>

              <Stars rating={rating} />

              <Typography
                fontStyle="italic"
                sx={{
                  fontSize: { xs: '1.1rem', md: '1.25rem' },
                  lineHeight: 1.7,
                }}
              >
                {comment}
              </Typography>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
