import React from 'react';
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
    <Box sx={{ display: 'flex', gap: 0.5, color: '#d35400' }}>
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={i} />
      ))}
      {halfStar && <StarIcon style={{ clipPath: 'inset(0 50% 0 0)' }} />}
      {[...Array(emptyStars)].map((_, i) => (
        <StarBorderIcon key={i} />
      ))}
    </Box>
  );
}

export default function ReviewSection() {
  return (
    <Box sx={{ py: 8, backgroundColor: '#fdf8f5', textAlign: 'center' }}>
      <Typography variant="h5" fontWeight="bold" mb={6}>
        Voices of Our Pizzeria Pros
      </Typography>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          flexWrap: 'wrap',
        }}
      >
        {reviews.map(
          ({ name, class: className, rating, comment, avatarUrl }) => (
            <Box
              key={name}
              sx={{
                width: 320,
                bgcolor: '#fff',
                borderRadius: 2,
                boxShadow: 3,
                p: 3,
                textAlign: 'left',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Avatar src={avatarUrl} sx={{ width: 40, height: 40, mr: 1 }} />
                <Box>
                  <Typography fontWeight="bold" variant="subtitle1">
                    {name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {className}
                  </Typography>
                </Box>
              </Box>

              <Stars rating={rating} />

              <Typography mt={1} fontStyle="italic" fontSize="0.95rem">
                {comment}
              </Typography>
            </Box>
          )
        )}
      </Box>
    </Box>
  );
}
