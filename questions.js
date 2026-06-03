// OlympiStar Question Bank
// 29 topics × 5 questions = 145 questions total
// Subjects: Reasoning (8 topics), Math (7 topics), Science (7 topics), English (7 topics)

const QUESTION_BANK = {

  // ─────────────────────────────────────────────
  // REASONING  (8 topics)
  // ─────────────────────────────────────────────
  Reasoning: {

    'Patterns': [
      {
        text: 'Which shape comes next in the pattern: ○ △ ○ △ ○ ?',
        options: ['○', '△', '□', '◇'],
        correct: 1,
        explanation: 'The pattern alternates circle and triangle, so triangle (△) comes next.'
      },
      {
        text: 'What comes next in the pattern: 2, 4, 6, 8, ?',
        options: ['9', '10', '11', '12'],
        correct: 1,
        explanation: 'Each number increases by 2. After 8 comes 10.'
      },
      {
        text: 'Which colour comes next: Red, Blue, Red, Blue, Red, ?',
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correct: 1,
        explanation: 'The pattern alternates Red and Blue, so Blue comes next.'
      },
      {
        text: 'What comes next in the pattern: A, C, E, G, ?',
        options: ['H', 'I', 'J', 'K'],
        correct: 1,
        explanation: 'Every letter skips one letter. After G, skip H, so I comes next.'
      },
      {
        text: 'Which number comes next: 1, 4, 9, 16, ?',
        options: ['20', '25', '24', '36'],
        correct: 1,
        explanation: 'These are perfect squares: 1²=1, 2²=4, 3²=9, 4²=16, 5²=25.'
      },
      {
        text: 'What comes next: 3, 6, 12, 24, ?',
        options: ['30', '36', '48', '42'],
        correct: 2,
        explanation: 'Each number is doubled. 24 × 2 = 48.'
      },
      {
        text: 'Which shape comes next: □ □ △ □ □ △ □ □ ?',
        options: ['□', '△', '○', '◇'],
        correct: 1,
        explanation: 'The pattern repeats every 3: square, square, triangle. So triangle comes next.'
      },
      {
        text: 'What comes next: 1, 3, 5, 7, 9, ?',
        options: ['10', '11', '12', '13'],
        correct: 1,
        explanation: 'These are odd numbers increasing by 2. After 9 comes 11.'
      },
      {
        text: 'Find the pattern: 10, 20, 30, 40, ?',
        options: ['45', '50', '55', '60'],
        correct: 1,
        explanation: 'Each number increases by 10. After 40 comes 50.'
      },
      {
        text: 'What comes next: Z, Y, X, W, ?',
        options: ['U', 'V', 'T', 'S'],
        correct: 1,
        explanation: 'The alphabet is going backwards. After W comes V.'
      },
      {
        text: 'Find the next number: 5, 10, 15, 20, ?',
        options: ['22', '25', '30', '24'],
        correct: 1,
        explanation: 'Each number increases by 5. After 20 comes 25.'
      },
      {
        text: 'What comes next: AB, CD, EF, GH, ?',
        options: ['HI', 'IJ', 'JK', 'KL'],
        correct: 1,
        explanation: 'Each pair moves 2 letters forward. After GH comes IJ.'
      },
      {
        text: 'Find the pattern: 2, 6, 18, 54, ?',
        options: ['108', '162', '72', '216'],
        correct: 1,
        explanation: 'Each number is multiplied by 3. 54 × 3 = 162.'
      },
      {
        text: 'What comes next: ★ ○ ★ ○ ○ ★ ○ ○ ○ ★ ?',
        options: ['★', '○ ○ ○ ○', '○', '△'],
        correct: 2,
        explanation: 'After each star, the circles increase by 1. After the 4th star, there should be 4 circles. Next is ○.'
      },
      {
        text: 'Find the next: 100, 95, 90, 85, ?',
        options: ['75', '80', '70', '82'],
        correct: 1,
        explanation: 'Each number decreases by 5. After 85 comes 80.'
      },
      {
        text: 'What comes next: 1, 4, 2, 5, 3, 6, 4, ?',
        options: ['5', '7', '8', '6'],
        correct: 1,
        explanation: 'Two patterns alternate: 1,2,3,4... and 4,5,6,7... Next in second pattern is 7.'
      },
      {
        text: 'Find the pattern: AA, BB, CC, DD, ?',
        options: ['EE', 'FF', 'DE', 'EF'],
        correct: 0,
        explanation: 'Each pair uses the next letter doubled. After DD comes EE.'
      },
      {
        text: 'What comes next: 11, 22, 33, 44, ?',
        options: ['50', '55', '54', '56'],
        correct: 1,
        explanation: 'Each number increases by 11. After 44 comes 55.'
      },
      {
        text: 'Find the next shape: △ △ □ △ △ □ △ △ ?',
        options: ['△', '□', '○', '◇'],
        correct: 1,
        explanation: 'The pattern repeats: triangle, triangle, square. So square comes next.'
      }
      ],

    'Series': [
      {
        text: 'Find the missing number: 3, 6, 9, __, 15',
        options: ['10', '11', '12', '13'],
        correct: 2,
        explanation: 'The series increases by 3 each time. After 9 comes 12.'
      },
      {
        text: 'Find the missing number: 5, 10, 20, 40, __',
        options: ['60', '70', '80', '50'],
        correct: 2,
        explanation: 'Each number is doubled. 40 × 2 = 80.'
      },
      {
        text: 'Find the missing letter: B, D, F, __, J',
        options: ['G', 'H', 'I', 'K'],
        correct: 1,
        explanation: 'Every letter skips one. After F, skip G, so H comes next.'
      },
      {
        text: 'Find the missing number: 100, 90, 80, __, 60',
        options: ['65', '70', '75', '68'],
        correct: 1,
        explanation: 'The series decreases by 10 each time. After 80 comes 70.'
      },
      {
        text: 'Find the missing number: 1, 1, 2, 3, 5, __',
        options: ['6', '7', '8', '9'],
        correct: 2,
        explanation: 'Each number is the sum of the two before it (Fibonacci). 3 + 5 = 8.'
      },
      {
        text: 'Find the missing number: 2, 4, 8, 16, __, 64',
        options: ['24', '28', '32', '48'],
        correct: 2,
        explanation: 'Each number is doubled. 16 × 2 = 32.'
      },
      {
        text: 'Find the missing number: 7, 14, 21, __, 35',
        options: ['24', '25', '28', '30'],
        correct: 2,
        explanation: 'The series increases by 7 each time. After 21 comes 28.'
      },
      {
        text: 'Find the missing number: 50, 45, 40, __, 30',
        options: ['36', '37', '35', '38'],
        correct: 2,
        explanation: 'The series decreases by 5 each time. After 40 comes 35.'
      },
      {
        text: 'Find the missing number: 1, 2, 4, 7, 11, __',
        options: ['14', '15', '16', '17'],
        correct: 2,
        explanation: 'The differences increase by 1: +1, +2, +3, +4, +5. So 11 + 5 = 16.'
      },
      {
        text: 'Find the missing letter: A, D, G, J, __',
        options: ['K', 'L', 'M', 'N'],
        correct: 2,
        explanation: 'Each letter skips 2. A(+3)=D, D(+3)=G, G(+3)=J, J(+3)=M.'
      },
      {
        text: 'Find the missing number: 81, 27, 9, 3, __',
        options: ['0', '1', '2', '6'],
        correct: 1,
        explanation: 'Each number is divided by 3. 3 ÷ 3 = 1.'
      },
      {
        text: 'Find the missing number: 4, 9, 16, 25, __',
        options: ['30', '36', '49', '35'],
        correct: 1,
        explanation: 'These are perfect squares: 2²=4, 3²=9, 4²=16, 5²=25, 6²=36.'
      },
      {
        text: 'Find the missing number: 10, 12, 15, 19, __',
        options: ['22', '23', '24', '25'],
        correct: 2,
        explanation: 'Differences increase by 1: +2, +3, +4, +5. So 19 + 5 = 24.'
      },
      {
        text: 'Find the missing number: 1, 3, 6, 10, 15, __',
        options: ['18', '20', '21', '25'],
        correct: 2,
        explanation: 'Differences increase by 1: +2, +3, +4, +5, +6. So 15 + 6 = 21.'
      },
      {
        text: 'Find the missing number: 99, 88, 77, 66, __',
        options: ['56', '55', '54', '44'],
        correct: 1,
        explanation: 'Each number decreases by 11. After 66 comes 55.'
      },
      {
        text: 'Find the missing number: 2, 3, 5, 8, 12, __',
        options: ['15', '16', '17', '18'],
        correct: 2,
        explanation: 'Differences increase by 1: +1, +2, +3, +4, +5. So 12 + 5 = 17.'
      },
      {
        text: 'Find the missing letter: Z, X, V, T, __',
        options: ['S', 'R', 'Q', 'P'],
        correct: 1,
        explanation: 'Each letter goes back by 2. Z(-2)=X, X(-2)=V, V(-2)=T, T(-2)=R.'
      },
      {
        text: 'Find the missing number: 1000, 500, 250, 125, __',
        options: ['62.5', '100', '75', '50'],
        correct: 0,
        explanation: 'Each number is halved. 125 ÷ 2 = 62.5.'
      },
      {
        text: 'Find the missing number: 3, 9, 27, 81, __',
        options: ['162', '243', '100', '108'],
        correct: 1,
        explanation: 'Each number is multiplied by 3. 81 × 3 = 243.'
      }
    ],

    'Analogy': [
      {
        text: 'Dog is to Puppy as Cat is to ?',
        options: ['Kitten', 'Cub', 'Calf', 'Foal'],
        correct: 0,
        explanation: 'A baby dog is called a puppy. A baby cat is called a kitten.'
      },
      {
        text: 'Book is to Library as Painting is to ?',
        options: ['School', 'Museum', 'Hospital', 'Market'],
        correct: 1,
        explanation: 'Books are kept in a library. Paintings are kept in a museum.'
      },
      {
        text: 'Fish is to Water as Bird is to ?',
        options: ['Tree', 'Sky', 'Nest', 'Cage'],
        correct: 1,
        explanation: 'Fish live in water. Birds live in the sky (air).'
      },
      {
        text: 'Pen is to Write as Scissors is to ?',
        options: ['Sew', 'Cut', 'Draw', 'Paint'],
        correct: 1,
        explanation: 'A pen is used to write. Scissors are used to cut.'
      },
      {
        text: 'Doctor is to Hospital as Teacher is to ?',
        options: ['Library', 'School', 'Office', 'Market'],
        correct: 1,
        explanation: 'A doctor works in a hospital. A teacher works in a school.'
      },
      {
        text: 'Ear is to Hear as Eye is to ?',
        options: ['Smell', 'See', 'Touch', 'Taste'],
        correct: 1,
        explanation: 'Ears are used to hear. Eyes are used to see.'
      },
      {
        text: 'Cow is to Calf as Horse is to ?',
        options: ['Pony', 'Foal', 'Cub', 'Lamb'],
        correct: 1,
        explanation: 'A baby cow is a calf. A baby horse is a foal.'
      },
      {
        text: 'Gloves are to Hands as Shoes are to ?',
        options: ['Legs', 'Feet', 'Arms', 'Knees'],
        correct: 1,
        explanation: 'Gloves cover hands. Shoes cover feet.'
      },
      {
        text: 'Pilot is to Plane as Captain is to ?',
        options: ['Car', 'Ship', 'Train', 'Bus'],
        correct: 1,
        explanation: 'A pilot flies a plane. A captain commands a ship.'
      },
      {
        text: 'Bee is to Hive as Bird is to ?',
        options: ['Cage', 'Nest', 'Tree', 'Sky'],
        correct: 1,
        explanation: 'A bee lives in a hive. A bird lives in a nest.'
      },
      {
        text: 'Knife is to Cut as Needle is to ?',
        options: ['Poke', 'Sew', 'Thread', 'Stitch'],
        correct: 1,
        explanation: 'A knife is used to cut. A needle is used to sew.'
      },
      {
        text: 'Moon is to Night as Sun is to ?',
        options: ['Morning', 'Day', 'Light', 'Heat'],
        correct: 1,
        explanation: 'The moon is seen at night. The sun is seen during the day.'
      },
      {
        text: 'Painter is to Brush as Writer is to ?',
        options: ['Book', 'Pen', 'Paper', 'Ink'],
        correct: 1,
        explanation: 'A painter uses a brush. A writer uses a pen.'
      },
      {
        text: 'Ice is to Cold as Fire is to ?',
        options: ['Smoke', 'Hot', 'Light', 'Ash'],
        correct: 1,
        explanation: 'Ice is cold. Fire is hot.'
      },
      {
        text: 'Mango is to Fruit as Rose is to ?',
        options: ['Plant', 'Flower', 'Garden', 'Thorn'],
        correct: 1,
        explanation: 'Mango is a type of fruit. Rose is a type of flower.'
      },
      {
        text: 'Brick is to Wall as Page is to ?',
        options: ['Pen', 'Book', 'Paper', 'Word'],
        correct: 1,
        explanation: 'Bricks make up a wall. Pages make up a book.'
      },
      {
        text: 'Hen is to Chick as Frog is to ?',
        options: ['Tadpole', 'Larva', 'Pup', 'Cub'],
        correct: 0,
        explanation: 'A baby hen is a chick. A baby frog is a tadpole.'
      },
      {
        text: 'Nose is to Smell as Tongue is to ?',
        options: ['Eat', 'Taste', 'Lick', 'Speak'],
        correct: 1,
        explanation: 'Nose is used to smell. Tongue is used to taste.'
      },
      {
        text: 'Wheel is to Car as Wing is to ?',
        options: ['Sky', 'Bird', 'Feather', 'Fly'],
        correct: 1,
        explanation: 'A wheel helps a car move. A wing helps a bird move (fly).'
      }
    ],

    'Classification': [
      {
        text: 'Which one does NOT belong: Apple, Mango, Carrot, Banana?',
        options: ['Apple', 'Mango', 'Carrot', 'Banana'],
        correct: 2,
        explanation: 'Apple, Mango, and Banana are fruits. Carrot is a vegetable.'
      },
      {
        text: 'Which one does NOT belong: Lion, Tiger, Elephant, Eagle?',
        options: ['Lion', 'Tiger', 'Elephant', 'Eagle'],
        correct: 3,
        explanation: 'Lion, Tiger, and Elephant are land animals. Eagle is a bird.'
      },
      {
        text: 'Which one does NOT belong: Rose, Lily, Tulip, Oak?',
        options: ['Rose', 'Lily', 'Tulip', 'Oak'],
        correct: 3,
        explanation: 'Rose, Lily, and Tulip are flowers. Oak is a tree.'
      },
      {
        text: 'Which one does NOT belong: Chair, Table, Bed, Pencil?',
        options: ['Chair', 'Table', 'Bed', 'Pencil'],
        correct: 3,
        explanation: 'Chair, Table, and Bed are furniture. Pencil is a stationery item.'
      },
      {
        text: 'Which one does NOT belong: Cricket, Football, Chess, Tennis?',
        options: ['Cricket', 'Football', 'Chess', 'Tennis'],
        correct: 2,
        explanation: 'Cricket, Football, and Tennis are outdoor sports. Chess is a board game.'
      },
      {
        text: 'Which one does NOT belong: January, March, Monday, July?',
        options: ['January', 'March', 'Monday', 'July'],
        correct: 2,
        explanation: 'January, March, and July are months. Monday is a day of the week.'
      },
      {
        text: 'Which one does NOT belong: Guitar, Drum, Piano, Painting?',
        options: ['Guitar', 'Drum', 'Piano', 'Painting'],
        correct: 3,
        explanation: 'Guitar, Drum, and Piano are musical instruments. Painting is an art form.'
      },
      {
        text: 'Which one does NOT belong: Red, Blue, Green, Sweet?',
        options: ['Red', 'Blue', 'Green', 'Sweet'],
        correct: 3,
        explanation: 'Red, Blue, and Green are colours. Sweet is a taste.'
      },
      {
        text: 'Which one does NOT belong: Delhi, Mumbai, India, Chennai?',
        options: ['Delhi', 'Mumbai', 'India', 'Chennai'],
        correct: 2,
        explanation: 'Delhi, Mumbai, and Chennai are cities. India is a country.'
      },
      {
        text: 'Which one does NOT belong: Milk, Juice, Water, Bread?',
        options: ['Milk', 'Juice', 'Water', 'Bread'],
        correct: 3,
        explanation: 'Milk, Juice, and Water are liquids. Bread is a solid food.'
      },
      {
        text: 'Which one does NOT belong: Sparrow, Parrot, Bat, Crow?',
        options: ['Sparrow', 'Parrot', 'Bat', 'Crow'],
        correct: 2,
        explanation: 'Sparrow, Parrot, and Crow are birds. Bat is a mammal (not a bird).'
      },
      {
        text: 'Which one does NOT belong: Addition, Subtraction, English, Multiplication?',
        options: ['Addition', 'Subtraction', 'English', 'Multiplication'],
        correct: 2,
        explanation: 'Addition, Subtraction, and Multiplication are math operations. English is a language.'
      },
      {
        text: 'Which one does NOT belong: Carrot, Potato, Apple, Onion?',
        options: ['Carrot', 'Potato', 'Apple', 'Onion'],
        correct: 2,
        explanation: 'Carrot, Potato, and Onion are vegetables. Apple is a fruit.'
      },
      {
        text: 'Which one does NOT belong: Shirt, Trouser, Hat, Sandwich?',
        options: ['Shirt', 'Trouser', 'Hat', 'Sandwich'],
        correct: 3,
        explanation: 'Shirt, Trouser, and Hat are clothing items. Sandwich is food.'
      },
      {
        text: 'Which one does NOT belong: Mercury, Venus, Moon, Mars?',
        options: ['Mercury', 'Venus', 'Moon', 'Mars'],
        correct: 2,
        explanation: 'Mercury, Venus, and Mars are planets. Moon is a natural satellite.'
      },
      {
        text: 'Which one does NOT belong: Hammer, Saw, Spoon, Drill?',
        options: ['Hammer', 'Saw', 'Spoon', 'Drill'],
        correct: 2,
        explanation: 'Hammer, Saw, and Drill are tools. Spoon is a utensil for eating.'
      },
      {
        text: 'Which one does NOT belong: Triangle, Square, Circle, Cube?',
        options: ['Triangle', 'Square', 'Circle', 'Cube'],
        correct: 3,
        explanation: 'Triangle, Square, and Circle are 2D shapes. Cube is a 3D shape.'
      },
      {
        text: 'Which one does NOT belong: Ant, Bee, Spider, Butterfly?',
        options: ['Ant', 'Bee', 'Spider', 'Butterfly'],
        correct: 2,
        explanation: 'Ant, Bee, and Butterfly are insects (6 legs). Spider is an arachnid (8 legs).'
      },
      {
        text: 'Which one does NOT belong: Pencil, Eraser, Ruler, Pillow?',
        options: ['Pencil', 'Eraser', 'Ruler', 'Pillow'],
        correct: 3,
        explanation: 'Pencil, Eraser, and Ruler are stationery items. Pillow is a bedroom item.'
      }
    ],

    'Coding-Decoding': [
      {
        text: 'If CAT is coded as DBU, what is the code for DOG?',
        options: ['EPH', 'COF', 'ENF', 'EPG'],
        correct: 0,
        explanation: 'Each letter is replaced by the next letter in the alphabet. D→E, O→P, G→H, so DOG = EPH.'
      },
      {
        text: 'If APPLE is coded as BQQMF, what is the code for BALL?',
        options: ['CBMM', 'CBNM', 'CBLL', 'DCMM'],
        correct: 0,
        explanation: 'Each letter moves one step forward. B→C, A→B, L→M, L→M, so BALL = CBMM.'
      },
      {
        text: 'If 1=A, 2=B, 3=C, what does 3-1-20 stand for?',
        options: ['CAT', 'BAT', 'CAR', 'CAN'],
        correct: 0,
        explanation: '3=C, 1=A, 20=T. So 3-1-20 = CAT.'
      },
      {
        text: 'If MANGO is coded as NBOHP, what is the code for GRAPE?',
        options: ['HSBQF', 'HSBPF', 'GSBQF', 'HRCQF'],
        correct: 0,
        explanation: 'Each letter moves one step forward. G→H, R→S, A→B, P→Q, E→F, so GRAPE = HSBQF.'
      },
      {
        text: 'If SUN is coded as 19-21-14, what is the code for CAT?',
        options: ['3-1-20', '2-1-20', '3-2-20', '4-1-20'],
        correct: 0,
        explanation: 'Each letter is replaced by its position in the alphabet. C=3, A=1, T=20, so CAT = 3-1-20.'
      },
      {
        text: 'If FISH is coded as GJTI, what is the code for BIRD?',
        options: ['CJSE', 'DJSE', 'CJTE', 'CKSE'],
        correct: 0,
        explanation: 'Each letter moves one step forward: B→C, I→J, R→S, D→E. So BIRD = CJSE.'
      },
      {
        text: 'If A=26, B=25, C=24... Z=1, what is the value of CAT?',
        options: ['24+26+7=57', '3+1+20=24', '24+26+7=57', '24+26+7=57'],
        correct: 0,
        explanation: 'C=24, A=26, T=7. So CAT = 24+26+7 = 57.'
      },
      {
        text: 'If TREE is coded as USFF, what is the code for LEAF?',
        options: ['MFBG', 'MEBG', 'MFCG', 'LFBG'],
        correct: 0,
        explanation: 'Each letter moves one step forward: L→M, E→F, A→B, F→G. So LEAF = MFBG.'
      },
      {
        text: 'If PEN is coded as 16-5-14, what is the code for INK?',
        options: ['9-14-11', '8-13-10', '10-15-12', '9-13-11'],
        correct: 0,
        explanation: 'Each letter = its position: I=9, N=14, K=11. So INK = 9-14-11.'
      },
      {
        text: 'If ROSE is coded as SPTF, what is the code for LILY?',
        options: ['MJMZ', 'MKLY', 'MJLZ', 'NKMZ'],
        correct: 0,
        explanation: 'Each letter moves one step forward: L→M, I→J, L→M, Y→Z. So LILY = MJMZ.'
      },
      {
        text: 'If in a code, COME = DPNF, then GONE = ?',
        options: ['HPOF', 'HPNE', 'GPOF', 'HQOF'],
        correct: 0,
        explanation: 'Each letter moves one step forward: G→H, O→P, N→O, E→F. So GONE = HPOF.'
      },
      {
        text: 'If STAR is coded as 19-20-1-18, what is MOON?',
        options: ['13-15-15-14', '12-14-14-13', '13-16-16-15', '14-15-15-14'],
        correct: 0,
        explanation: 'M=13, O=15, O=15, N=14. So MOON = 13-15-15-14.'
      },
      {
        text: 'If KING is coded as LJOH, what is QUEEN?',
        options: ['RVFFO', 'RVFEO', 'RUFFO', 'QVFFO'],
        correct: 0,
        explanation: 'Each letter moves one step forward: Q→R, U→V, E→F, E→F, N→O. So QUEEN = RVFFO.'
      },
      {
        text: 'If Z=1, Y=2, X=3... A=26, what is the code for SUN?',
        options: ['8+6+13=27', '19+21+14=54', '8+6+13=27', '7+5+12=24'],
        correct: 0,
        explanation: 'S=8, U=6, N=13 (reverse alphabet). So SUN = 8+6+13 = 27.'
      },
      {
        text: 'If HAND is coded as IBOE, what is FOOT?',
        options: ['GPPU', 'GPPV', 'GOPU', 'HPPU'],
        correct: 0,
        explanation: 'Each letter moves one step forward: F→G, O→P, O→P, T→U. So FOOT = GPPU.'
      },
      {
        text: 'If RED is coded as 18-5-4, what is BLUE?',
        options: ['2-12-21-5', '3-13-22-6', '2-11-20-4', '1-12-21-5'],
        correct: 0,
        explanation: 'B=2, L=12, U=21, E=5. So BLUE = 2-12-21-5.'
      },
      {
        text: 'If LAMP is coded as MBNQ, what is DESK?',
        options: ['EFTL', 'EGTL', 'DFTL', 'EFSL'],
        correct: 0,
        explanation: 'Each letter moves one step forward: D→E, E→F, S→T, K→L. So DESK = EFTL.'
      },
      {
        text: 'If RAIN is coded as SBJO, what is WIND?',
        options: ['XJOE', 'XKOE', 'WIOE', 'XJNE'],
        correct: 0,
        explanation: 'Each letter moves one step forward: W→X, I→J, N→O, D→E. So WIND = XJOE.'
      },
      {
        text: 'If BOAT is coded as 2-15-1-20, what is SHIP?',
        options: ['19-8-9-16', '18-8-9-16', '19-9-10-17', '20-8-9-16'],
        correct: 0,
        explanation: 'S=19, H=8, I=9, P=16. So SHIP = 19-8-9-16.'
      }
    ],

    'Mirror Images': [
      {
        text: 'If you look at the letter "b" in a mirror, what do you see?',
        options: ['b', 'd', 'p', 'q'],
        correct: 1,
        explanation: 'A mirror flips the image horizontally. The mirror image of "b" is "d".'
      },
      {
        text: 'What is the mirror image of the number "2"?',
        options: ['2', 'S', 'Z', 'Reversed 2'],
        correct: 3,
        explanation: 'A mirror flips the image left to right, so 2 appears reversed (flipped horizontally).'
      },
      {
        text: 'If you hold the word "MOM" in front of a mirror, what do you see?',
        options: ['MOM', 'WOW', 'MOW', 'MOM reversed'],
        correct: 0,
        explanation: 'MOM is a palindrome and its letters are symmetric, so it looks the same in a mirror.'
      },
      {
        text: 'The mirror image of the letter "p" is?',
        options: ['b', 'd', 'q', 'p'],
        correct: 2,
        explanation: 'A mirror flips left to right. The mirror image of "p" is "q".'
      },
      {
        text: 'If a clock shows 3:00, what time does its mirror image show?',
        options: ['3:00', '9:00', '6:00', '12:00'],
        correct: 1,
        explanation: 'In a mirror, the clock is flipped. 3:00 becomes 9:00 in the mirror image.'
      },
      {
        text: 'What is the mirror image of the letter "E"?',
        options: ['E reversed (Ǝ)', '3', 'W', 'M'],
        correct: 0,
        explanation: 'The mirror image of E is a reversed E, which looks like Ǝ or the number 3.'
      },
      {
        text: 'Which letter looks the SAME in a mirror?',
        options: ['B', 'A', 'F', 'G'],
        correct: 1,
        explanation: 'A is symmetric vertically, so it looks the same in a mirror.'
      },
      {
        text: 'If a clock shows 6:30, what time does its mirror image show?',
        options: ['6:30', '5:30', '12:30', '6:00'],
        correct: 1,
        explanation: 'In a mirror, 6:30 appears as 5:30. Mirror time = 12:00 minus actual time.'
      },
      {
        text: 'Which word reads the SAME in a mirror?',
        options: ['BOOK', 'NOON', 'MOM', 'TOOT'],
        correct: 2,
        explanation: 'MOM has symmetric letters M, O, M — it looks the same in a mirror.'
      },
      {
        text: 'The mirror image of the number "5" looks like?',
        options: ['5 reversed', '2', 'S', '3'],
        correct: 0,
        explanation: 'The mirror image of 5 is a reversed 5 (flipped horizontally).'
      },
      {
        text: 'Which number looks the SAME in a mirror?',
        options: ['2', '3', '8', '6'],
        correct: 2,
        explanation: '8 is symmetric, so it looks the same in a mirror.'
      },
      {
        text: 'If you hold "AMBULANCE" in front of a mirror, it reads?',
        options: ['AMBULANCE reversed', 'ECNALUBMA', 'AMBULANCE', 'Cannot read'],
        correct: 1,
        explanation: 'In a mirror, text appears reversed. AMBULANCE reads as ECNALUBMA.'
      },
      {
        text: 'The mirror image of letter "J" is?',
        options: ['L', 'J reversed', 'F', 'T'],
        correct: 1,
        explanation: 'The mirror image of J is a reversed J (the hook goes the other way).'
      },
      {
        text: 'Which of these shapes looks the SAME in a mirror?',
        options: ['Arrow pointing right', 'Circle', 'Letter R', 'Number 7'],
        correct: 1,
        explanation: 'A circle is perfectly symmetric, so it looks the same in a mirror.'
      },
      {
        text: 'If a clock shows 2:15, what does its mirror image show?',
        options: ['9:45', '10:45', '2:15', '8:45'],
        correct: 0,
        explanation: 'Mirror time of 2:15 is approximately 9:45 (12:00 - 2:15 = 9:45).'
      },
      {
        text: 'The mirror image of "d" is?',
        options: ['b', 'p', 'q', 'd'],
        correct: 0,
        explanation: 'A mirror flips left to right. The mirror image of "d" is "b".'
      },
      {
        text: 'Which capital letter does NOT look the same in a mirror?',
        options: ['O', 'X', 'B', 'T'],
        correct: 2,
        explanation: 'O, X, and T are symmetric. B is not symmetric vertically, so it looks different in a mirror.'
      },
      {
        text: 'If you write "18:10" and hold it to a mirror, what do you see?',
        options: ['01:81', '10:81 reversed', '18:10', '21:01'],
        correct: 0,
        explanation: 'In a mirror, the digits are reversed and flipped. 18:10 appears as 01:81.'
      }
    ],

    'Embedded Figures': [
      {
        text: 'A triangle is hidden inside which shape: a square, a rectangle, a circle, or a pentagon?',
        options: ['Square', 'Rectangle', 'Circle', 'Pentagon'],
        correct: 1,
        explanation: 'A triangle can be embedded inside a rectangle by drawing a diagonal line.'
      },
      {
        text: 'How many triangles are there in a figure made of a big triangle divided into 4 equal smaller triangles?',
        options: ['4', '5', '6', '3'],
        correct: 1,
        explanation: 'There are 4 small triangles plus 1 big triangle = 5 triangles in total.'
      },
      {
        text: 'How many squares can you find in a 2×2 grid of squares?',
        options: ['4', '5', '6', '3'],
        correct: 1,
        explanation: 'There are 4 small squares and 1 large square = 5 squares in total.'
      },
      {
        text: 'A circle is drawn inside a square. Which shape is embedded inside the other?',
        options: ['Square inside circle', 'Circle inside square', 'They overlap', 'Neither'],
        correct: 1,
        explanation: 'The circle is drawn inside the square, so the circle is the embedded figure.'
      },
      {
        text: 'How many rectangles are there in a figure with 3 horizontal lines and 2 vertical lines forming a grid?',
        options: ['3', '6', '9', '12'],
        correct: 1,
        explanation: 'In a 2×3 grid, the number of rectangles = C(3,2) × C(2,2) = 3 × 1 = 3... actually 6 rectangles total.'
      },
      {
        text: 'How many triangles are in a triangle divided into 2 smaller triangles by one line from top to base?',
        options: ['2', '3', '4', '1'],
        correct: 1,
        explanation: '2 small triangles + 1 big triangle = 3 triangles total.'
      },
      {
        text: 'How many rectangles can you find in a rectangle divided into 2 equal parts?',
        options: ['2', '3', '4', '1'],
        correct: 1,
        explanation: '2 small rectangles + 1 big rectangle = 3 rectangles total.'
      },
      {
        text: 'A square is divided into 4 equal smaller squares. How many total squares are there?',
        options: ['4', '5', '6', '8'],
        correct: 1,
        explanation: '4 small squares + 1 big square = 5 squares total.'
      },
      {
        text: 'How many line segments are needed to draw a triangle?',
        options: ['2', '3', '4', '5'],
        correct: 1,
        explanation: 'A triangle has 3 sides, so 3 line segments are needed.'
      },
      {
        text: 'A rectangle is divided into 3 equal vertical strips. How many rectangles are there in total?',
        options: ['3', '4', '5', '6'],
        correct: 3,
        explanation: '3 single strips + 2 double strips + 1 whole rectangle = 6 rectangles.'
      },
      {
        text: 'Which shape can you always find inside a rectangle?',
        options: ['Circle', 'Triangle', 'Pentagon', 'Hexagon'],
        correct: 1,
        explanation: 'You can always draw a triangle inside a rectangle using a diagonal.'
      },
      {
        text: 'How many triangles are in a star shape (5-pointed star)?',
        options: ['5', '8', '10', '12'],
        correct: 2,
        explanation: 'A 5-pointed star contains 10 triangles (5 outer + 5 inner overlapping).'
      },
      {
        text: 'A line divides a square diagonally. How many triangles are formed?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'One diagonal line divides a square into exactly 2 triangles.'
      },
      {
        text: 'How many squares are in a 3×3 grid?',
        options: ['9', '10', '13', '14'],
        correct: 3,
        explanation: '9 small (1×1) + 4 medium (2×2) + 1 large (3×3) = 14 squares.'
      },
      {
        text: 'Both diagonals of a square create how many triangles?',
        options: ['2', '3', '4', '6'],
        correct: 2,
        explanation: 'Two diagonals divide a square into 4 equal triangles.'
      },
      {
        text: 'A triangle with all 3 medians drawn has how many smaller triangles?',
        options: ['3', '4', '6', '9'],
        correct: 2,
        explanation: 'Three medians of a triangle divide it into 6 smaller triangles.'
      },
      {
        text: 'How many rectangles are in the letter "H"?',
        options: ['1', '2', '3', '5'],
        correct: 2,
        explanation: 'The letter H has 3 rectangles: 2 vertical bars and 1 horizontal bar.'
      },
      {
        text: 'A circle inside a square — which shape has more area?',
        options: ['Circle', 'Square', 'Both equal', 'Cannot tell'],
        correct: 1,
        explanation: 'The square has more area because the circle fits inside it with gaps at corners.'
      }
    ],

    'Direction Sense': [
      {
        text: 'Ravi walks 5 steps North, then 5 steps South. Where is he now?',
        options: ['5 steps North', '5 steps South', 'Back at the start', '10 steps away'],
        correct: 2,
        explanation: 'He walked 5 steps North and then 5 steps back South, so he is back at the starting point.'
      },
      {
        text: 'If you face North and turn right, which direction are you facing?',
        options: ['South', 'East', 'West', 'North'],
        correct: 1,
        explanation: 'Turning right from North means you face East.'
      },
      {
        text: 'Priya walks 3 km East, then 4 km North. How far is she from the start?',
        options: ['7 km', '5 km', '1 km', '12 km'],
        correct: 1,
        explanation: 'Using the Pythagorean theorem: √(3² + 4²) = √(9+16) = √25 = 5 km.'
      },
      {
        text: 'If you face South and turn left, which direction are you facing?',
        options: ['North', 'East', 'West', 'South'],
        correct: 1,
        explanation: 'Turning left from South means you face East.'
      },
      {
        text: 'Amit walks 10 steps East, then 10 steps West. In which direction is he from the start?',
        options: ['East', 'West', 'He is at the start', 'North'],
        correct: 2,
        explanation: 'He walked 10 steps East and then 10 steps back West, so he is back at the starting point.'
      },
      {
        text: 'If you face East and turn left, which direction do you face?',
        options: ['West', 'North', 'South', 'East'],
        correct: 1,
        explanation: 'Turning left from East means you face North.'
      },
      {
        text: 'Sita walks 4 km North, then 3 km East. How far is she from start?',
        options: ['7 km', '5 km', '1 km', '12 km'],
        correct: 1,
        explanation: 'Using Pythagorean theorem: √(4² + 3²) = √(16+9) = √25 = 5 km.'
      },
      {
        text: 'If you face West and turn right, which direction do you face?',
        options: ['East', 'North', 'South', 'West'],
        correct: 1,
        explanation: 'Turning right from West means you face North.'
      },
      {
        text: 'Ram walks 6 steps South, then 6 steps North. Where is he?',
        options: ['6 steps South', '12 steps away', 'Back at start', '6 steps North'],
        correct: 2,
        explanation: 'He walked 6 steps South then 6 steps back North — he is at the starting point.'
      },
      {
        text: 'The sun rises in which direction?',
        options: ['West', 'North', 'East', 'South'],
        correct: 2,
        explanation: 'The sun always rises in the East and sets in the West.'
      },
      {
        text: 'If you face South and turn right twice, which direction do you face?',
        options: ['North', 'South', 'East', 'West'],
        correct: 0,
        explanation: 'From South, turn right = West. Turn right again = North.'
      },
      {
        text: 'Meera walks 5 km East, then turns left and walks 5 km. Which direction is she from start?',
        options: ['North-East', 'South-East', 'North-West', 'South-West'],
        correct: 0,
        explanation: 'She went East then turned left (North). So she is North-East from start.'
      },
      {
        text: 'If North is behind you, which direction are you facing?',
        options: ['North', 'South', 'East', 'West'],
        correct: 1,
        explanation: 'If North is behind you, you are facing South (opposite direction).'
      },
      {
        text: 'Arun faces North. He turns clockwise 90°. Which direction does he face?',
        options: ['West', 'East', 'South', 'North'],
        correct: 1,
        explanation: 'Clockwise 90° from North = East.'
      },
      {
        text: 'If you make a complete turn (360°), which direction do you face?',
        options: ['Opposite direction', 'Same direction as before', 'Right side', 'Left side'],
        correct: 1,
        explanation: 'A 360° turn brings you back to the same direction you started facing.'
      },
      {
        text: 'Priya faces East. She turns left, then left again. Which direction does she face?',
        options: ['East', 'West', 'North', 'South'],
        correct: 1,
        explanation: 'From East, turn left = North. Turn left again = West.'
      },
      {
        text: 'Which direction is opposite to North-East?',
        options: ['North-West', 'South-East', 'South-West', 'East'],
        correct: 2,
        explanation: 'The opposite of North-East is South-West.'
      },
      {
        text: 'A boy walks 3 km West, then 4 km South. In which direction is he from start?',
        options: ['North-West', 'South-West', 'South-East', 'North-East'],
        correct: 1,
        explanation: 'He went West and then South, so he is South-West from the starting point.'
      },
      {
        text: 'If you turn 180° from facing North, which direction do you face?',
        options: ['East', 'West', 'South', 'North'],
        correct: 2,
        explanation: '180° is a half turn. The opposite of North is South.'
      }
    ]

  }, // end Reasoning

  // ─────────────────────────────────────────────
  // MATH  (7 topics)
  // ─────────────────────────────────────────────
  Math: {

    'Numbers': [
      {
        text: 'What is the place value of 7 in the number 3,742?',
        options: ['7', '70', '700', '7000'],
        correct: 2,
        explanation: 'In 3,742 the digit 7 is in the hundreds place, so its place value is 700.'
      },
      {
        text: 'Which of these numbers is the greatest: 4,321 or 3,421 or 4,231 or 4,312?',
        options: ['3,421', '4,231', '4,312', '4,321'],
        correct: 3,
        explanation: 'Comparing thousands first: 4,321 has the highest value among all four numbers.'
      },
      {
        text: 'What is 5,000 + 300 + 40 + 6 in standard form?',
        options: ['5,346', '5,436', '5,364', '5,463'],
        correct: 0,
        explanation: '5,000 + 300 + 40 + 6 = 5,346.'
      },
      {
        text: 'Which number is between 4,500 and 4,600?',
        options: ['4,499', '4,601', '4,550', '4,700'],
        correct: 2,
        explanation: '4,550 is between 4,500 and 4,600.'
      },
      {
        text: 'What is the predecessor of 10,000?',
        options: ['10,001', '9,999', '9,000', '10,010'],
        correct: 1,
        explanation: 'The predecessor is the number just before. 10,000 − 1 = 9,999.'
      },
      {
        text: 'What is the face value of 6 in the number 4,678?',
        options: ['6', '60', '600', '6000'],
        correct: 0,
        explanation: 'The face value of a digit is the digit itself. Face value of 6 is always 6.'
      },
      {
        text: 'Which is the smallest 4-digit number?',
        options: ['9999', '1001', '1000', '1111'],
        correct: 2,
        explanation: 'The smallest 4-digit number is 1000.'
      },
      {
        text: 'What is the successor of 7,999?',
        options: ['7,998', '8,000', '8,001', '7,900'],
        correct: 1,
        explanation: 'The successor is the number just after. 7,999 + 1 = 8,000.'
      },
      {
        text: 'Round 3,467 to the nearest hundred.',
        options: ['3,400', '3,500', '3,470', '3,000'],
        correct: 1,
        explanation: '3,467 → the tens digit is 6 (≥5), so round up to 3,500.'
      },
      {
        text: 'Which number is in descending order?',
        options: ['1234, 2345, 3456', '5678, 4567, 3456', '1111, 2222, 3333', '100, 200, 300'],
        correct: 1,
        explanation: 'Descending order means largest to smallest: 5678 > 4567 > 3456.'
      },
      {
        text: 'What is the largest 3-digit number?',
        options: ['100', '900', '999', '1000'],
        correct: 2,
        explanation: 'The largest 3-digit number is 999. The next number (1000) is a 4-digit number.'
      },
      {
        text: 'How many hundreds are there in 4,500?',
        options: ['4', '5', '45', '450'],
        correct: 2,
        explanation: '4,500 ÷ 100 = 45. There are 45 hundreds in 4,500.'
      },
      {
        text: 'Which digit is in the thousands place in 8,253?',
        options: ['8', '2', '5', '3'],
        correct: 0,
        explanation: 'In 8,253: 8 is in thousands, 2 in hundreds, 5 in tens, 3 in ones.'
      },
      {
        text: 'What is 6,000 + 400 + 50 + 3 in standard form?',
        options: ['6,453', '6,435', '6,543', '6,345'],
        correct: 0,
        explanation: '6,000 + 400 + 50 + 3 = 6,453.'
      },
      {
        text: 'Which number comes just before 5,000?',
        options: ['4,999', '5,001', '4,900', '4,990'],
        correct: 0,
        explanation: 'The number just before 5,000 is 4,999 (predecessor).'
      },
      {
        text: 'How many 4-digit numbers are there?',
        options: ['8,999', '9,000', '9,999', '1,000'],
        correct: 1,
        explanation: '4-digit numbers range from 1000 to 9999. Total = 9999 - 1000 + 1 = 9,000.'
      },
      {
        text: 'What is the place value of 3 in 2,356?',
        options: ['3', '30', '300', '3000'],
        correct: 2,
        explanation: 'In 2,356, the digit 3 is in the hundreds place. Place value = 300.'
      },
      {
        text: 'Arrange in ascending order: 4,521, 4,251, 4,512, 4,125',
        options: ['4,125, 4,251, 4,512, 4,521', '4,521, 4,512, 4,251, 4,125', '4,251, 4,125, 4,512, 4,521', '4,125, 4,512, 4,251, 4,521'],
        correct: 0,
        explanation: 'Ascending order (smallest to largest): 4,125 < 4,251 < 4,512 < 4,521.'
      },
      {
        text: 'What is the difference between the place value and face value of 5 in 3,567?',
        options: ['495', '500', '5', '505'],
        correct: 0,
        explanation: 'Place value of 5 = 500. Face value of 5 = 5. Difference = 500 - 5 = 495.'
      },
      {
        text: 'Which is an even number?',
        options: ['3,457', '2,891', '6,324', '7,135'],
        correct: 2,
        explanation: 'A number is even if its last digit is 0, 2, 4, 6, or 8. 6,324 ends in 4, so it is even.'
      }
    ],

    'Addition & Subtraction': [
      {
        text: 'What is 2,345 + 1,678?',
        options: ['3,923', '4,023', '4,013', '3,913'],
        correct: 1,
        explanation: '2,345 + 1,678 = 4,023.'
      },
      {
        text: 'What is 5,000 − 2,347?',
        options: ['2,653', '2,743', '2,543', '2,663'],
        correct: 0,
        explanation: '5,000 − 2,347 = 2,653.'
      },
      {
        text: 'A shop had 1,250 apples. It sold 875. How many apples are left?',
        options: ['375', '475', '385', '365'],
        correct: 0,
        explanation: '1,250 − 875 = 375 apples are left.'
      },
      {
        text: 'What is 999 + 1?',
        options: ['1,000', '998', '1,001', '990'],
        correct: 0,
        explanation: '999 + 1 = 1,000.'
      },
      {
        text: 'Riya had ₹3,500. She spent ₹1,250. How much money does she have left?',
        options: ['₹2,150', '₹2,250', '₹2,350', '₹2,050'],
        correct: 1,
        explanation: '₹3,500 − ₹1,250 = ₹2,250.'
      },

      {
        text: 'What is 4,567 + 2,433?',
        options: ['6,000', '7,000', '6,900', '7,100'],
        correct: 1,
        explanation: '4,567 + 2,433 = 7,000.'
      },
      {
        text: 'What is 8,000 − 3,456?',
        options: ['4,544', '4,454', '5,544', '4,644'],
        correct: 0,
        explanation: '8,000 − 3,456 = 4,544.'
      },
      {
        text: 'Aman had 2,350 stickers. He gave 1,175 to his friend. How many are left?',
        options: ['1,175', '1,275', '1,075', '1,225'],
        correct: 0,
        explanation: '2,350 − 1,175 = 1,175 stickers are left.'
      },
      {
        text: 'What is 1,234 + 2,345 + 421?',
        options: ['3,900', '4,000', '3,000', '4,100'],
        correct: 1,
        explanation: '1,234 + 2,345 = 3,579. Then 3,579 + 421 = 4,000.'
      },
      {
        text: 'Find the missing number: 3,456 + ___ = 5,000',
        options: ['1,444', '1,544', '1,644', '1,554'],
        correct: 1,
        explanation: '5,000 − 3,456 = 1,544.'
      },
      {
        text: 'A school has 1,250 boys and 1,375 girls. How many students in total?',
        options: ['2,525', '2,625', '2,725', '2,615'],
        correct: 1,
        explanation: '1,250 + 1,375 = 2,625 students.'
      },
      {
        text: 'What is 6,543 − 2,876?',
        options: ['3,667', '3,767', '3,567', '3,677'],
        correct: 0,
        explanation: '6,543 − 2,876 = 3,667.'
      },
      {
        text: 'Add: 4,999 + 1',
        options: ['4,000', '5,000', '5,100', '4,900'],
        correct: 1,
        explanation: '4,999 + 1 = 5,000.'
      },
      {
        text: 'Subtract: 10,000 − 1',
        options: ['9,999', '9,000', '9,990', '9,900'],
        correct: 0,
        explanation: '10,000 − 1 = 9,999.'
      },
      {
        text: 'A library has 3,450 books. 1,200 more books were added. How many books now?',
        options: ['4,550', '4,650', '4,750', '4,450'],
        correct: 1,
        explanation: '3,450 + 1,200 = 4,650 books.'
      },
      {
        text: 'What is 7,890 − 4,567?',
        options: ['3,323', '3,233', '3,333', '3,223'],
        correct: 0,
        explanation: '7,890 − 4,567 = 3,323.'
      },
      {
        text: 'Find the sum: 2,500 + 3,500',
        options: ['5,000', '6,000', '5,500', '6,500'],
        correct: 1,
        explanation: '2,500 + 3,500 = 6,000.'
      },
      {
        text: 'Priya scored 456 in Term 1 and 389 in Term 2. What is her total score?',
        options: ['835', '845', '855', '825'],
        correct: 1,
        explanation: '456 + 389 = 845.'
      },
      {
        text: 'A farmer had 5,000 kg of wheat. He sold 2,750 kg. How much is left?',
        options: ['2,250 kg', '2,350 kg', '2,150 kg', '2,450 kg'],
        correct: 0,
        explanation: '5,000 − 2,750 = 2,250 kg.'
      },
      {
        text: 'What is 3,333 + 3,334?',
        options: ['6,666', '6,667', '6,668', '6,777'],
        correct: 1,
        explanation: '3,333 + 3,334 = 6,667.'
      },
      {
        text: 'Find the difference: 9,001 − 8,999',
        options: ['1', '2', '3', '10'],
        correct: 1,
        explanation: '9,001 − 8,999 = 2.'
      }
    ],

    'Multiplication': [
      {
        text: 'What is 24 × 5?',
        options: ['100', '110', '120', '115'],
        correct: 2,
        explanation: '24 × 5 = 120.'
      },
      {
        text: 'What is 36 × 4?',
        options: ['124', '134', '144', '154'],
        correct: 2,
        explanation: '36 × 4 = 144.'
      },
      {
        text: 'A box has 12 chocolates. How many chocolates are in 8 boxes?',
        options: ['86', '96', '106', '76'],
        correct: 1,
        explanation: '12 × 8 = 96 chocolates.'
      },
      {
        text: 'What is 50 × 20?',
        options: ['100', '500', '1,000', '2,000'],
        correct: 2,
        explanation: '50 × 20 = 1,000.'
      },
      {
        text: 'What is 125 × 3?',
        options: ['365', '375', '385', '355'],
        correct: 1,
        explanation: '125 × 3 = 375.'
      },
      {
        text: 'What is 15 × 6?',
        options: ['80', '90', '85', '95'],
        correct: 1,
        explanation: '15 × 6 = 90.'
      },
      {
        text: 'What is 25 × 4?',
        options: ['75', '100', '125', '80'],
        correct: 1,
        explanation: '25 × 4 = 100.'
      },
      {
        text: 'A packet has 15 biscuits. How many biscuits are in 7 packets?',
        options: ['95', '100', '105', '110'],
        correct: 2,
        explanation: '15 × 7 = 105 biscuits.'
      },
      {
        text: 'What is 18 × 5?',
        options: ['80', '85', '90', '95'],
        correct: 2,
        explanation: '18 × 5 = 90.'
      },
      {
        text: 'What is 100 × 7?',
        options: ['70', '700', '7000', '7'],
        correct: 1,
        explanation: '100 × 7 = 700.'
      },
      {
        text: 'There are 24 hours in a day. How many hours are in 7 days?',
        options: ['148', '158', '168', '178'],
        correct: 2,
        explanation: '24 × 7 = 168 hours.'
      },
      {
        text: 'What is 45 × 2?',
        options: ['80', '85', '90', '95'],
        correct: 2,
        explanation: '45 × 2 = 90.'
      },
      {
        text: 'What is 11 × 11?',
        options: ['111', '121', '131', '110'],
        correct: 1,
        explanation: '11 × 11 = 121.'
      },
      {
        text: 'A bus carries 50 passengers. How many passengers can 6 buses carry?',
        options: ['250', '300', '350', '200'],
        correct: 1,
        explanation: '50 × 6 = 300 passengers.'
      },
      {
        text: 'What is 32 × 3?',
        options: ['86', '96', '106', '93'],
        correct: 1,
        explanation: '32 × 3 = 96.'
      },
      {
        text: 'What is 250 × 4?',
        options: ['750', '900', '1000', '1250'],
        correct: 2,
        explanation: '250 × 4 = 1,000.'
      },
      {
        text: 'Each row has 12 chairs. There are 9 rows. How many chairs in total?',
        options: ['98', '108', '118', '128'],
        correct: 1,
        explanation: '12 × 9 = 108 chairs.'
      },
      {
        text: 'What is 99 × 2?',
        options: ['188', '198', '196', '200'],
        correct: 1,
        explanation: '99 × 2 = 198.'
      },
      {
        text: 'What is 14 × 7?',
        options: ['88', '96', '98', '102'],
        correct: 2,
        explanation: '14 × 7 = 98.'
      },
      {
        text: 'A book costs ₹75. How much do 8 books cost?',
        options: ['₹500', '₹550', '₹600', '₹650'],
        correct: 2,
        explanation: '75 × 8 = ₹600.'
      },
      {
        text: 'What is 20 × 20?',
        options: ['200', '400', '40', '4000'],
        correct: 1,
        explanation: '20 × 20 = 400.'
      }
    ],

    'Fractions': [
      {
        text: 'Which fraction is equal to one half?',
        options: ['1/3', '2/4', '3/5', '2/3'],
        correct: 1,
        explanation: '2/4 simplifies to 1/2 because both numerator and denominator are divided by 2.'
      },
      {
        text: 'What is 1/4 + 1/4?',
        options: ['1/8', '2/8', '1/2', '2/4'],
        correct: 2,
        explanation: '1/4 + 1/4 = 2/4 = 1/2.'
      },
      {
        text: 'Which fraction is greater: 3/4 or 1/2?',
        options: ['1/2', '3/4', 'They are equal', 'Cannot say'],
        correct: 1,
        explanation: '3/4 = 0.75 and 1/2 = 0.5, so 3/4 is greater.'
      },
      {
        text: 'A pizza is cut into 8 equal slices. Rohan ate 3 slices. What fraction did he eat?',
        options: ['3/5', '5/8', '3/8', '1/3'],
        correct: 2,
        explanation: 'Rohan ate 3 out of 8 slices, which is 3/8 of the pizza.'
      },
      {
        text: 'What is 3/5 of 20?',
        options: ['10', '12', '15', '8'],
        correct: 1,
        explanation: '3/5 × 20 = (3 × 20) ÷ 5 = 60 ÷ 5 = 12.'
      },
      {
        text: 'What is 1/3 + 1/3?',
        options: ['1/6', '2/6', '2/3', '1/3'],
        correct: 2,
        explanation: '1/3 + 1/3 = 2/3. When denominators are same, add numerators.'
      },
      {
        text: 'Which fraction is smaller: 1/4 or 1/8?',
        options: ['1/4', '1/8', 'Both are equal', 'Cannot compare'],
        correct: 1,
        explanation: 'When numerators are same, the fraction with larger denominator is smaller. 1/8 < 1/4.'
      },
      {
        text: 'Convert 2/4 to its simplest form.',
        options: ['1/4', '1/2', '2/2', '4/2'],
        correct: 1,
        explanation: '2/4 = 1/2 (divide both numerator and denominator by 2).'
      },
      {
        text: 'What is 1/2 of 24?',
        options: ['10', '12', '14', '8'],
        correct: 1,
        explanation: '1/2 of 24 = 24 ÷ 2 = 12.'
      },
      {
        text: 'Which fraction is equivalent to 3/6?',
        options: ['1/3', '1/2', '2/3', '3/4'],
        correct: 1,
        explanation: '3/6 = 1/2 (divide both by 3).'
      },
      {
        text: 'What is 3/4 − 1/4?',
        options: ['1/4', '2/4', '3/4', '1/2'],
        correct: 3,
        explanation: '3/4 − 1/4 = 2/4 = 1/2.'
      },
      {
        text: 'A cake is cut into 6 equal pieces. Riya ate 2 pieces. What fraction is left?',
        options: ['2/6', '4/6', '3/6', '1/6'],
        correct: 1,
        explanation: 'Total = 6 pieces. Eaten = 2. Left = 6-2 = 4 pieces. Fraction left = 4/6.'
      },
      {
        text: 'Which is greater: 2/5 or 3/5?',
        options: ['2/5', '3/5', 'Both are equal', 'Cannot compare'],
        correct: 1,
        explanation: 'When denominators are same, the fraction with larger numerator is greater. 3/5 > 2/5.'
      },
      {
        text: 'What is 1/4 of 100?',
        options: ['20', '25', '50', '75'],
        correct: 1,
        explanation: '1/4 of 100 = 100 ÷ 4 = 25.'
      },
      {
        text: 'How many fourths make a whole?',
        options: ['2', '3', '4', '5'],
        correct: 2,
        explanation: '4 fourths (4/4) make one whole.'
      },
      {
        text: 'What is 2/3 of 15?',
        options: ['5', '10', '12', '8'],
        correct: 1,
        explanation: '2/3 of 15 = (2 × 15) ÷ 3 = 30 ÷ 3 = 10.'
      },
      {
        text: 'Which fraction is improper?',
        options: ['3/4', '2/5', '7/3', '1/2'],
        correct: 2,
        explanation: 'An improper fraction has numerator greater than denominator. 7/3 is improper (7 > 3).'
      },
      {
        text: 'Convert the mixed number 2 1/4 to an improper fraction.',
        options: ['5/4', '9/4', '7/4', '3/4'],
        correct: 1,
        explanation: '2 1/4 = (2×4 + 1)/4 = 9/4.'
      },
      {
        text: 'What is 5/8 + 2/8?',
        options: ['7/8', '7/16', '3/8', '8/8'],
        correct: 0,
        explanation: '5/8 + 2/8 = 7/8. Same denominator, so add numerators: 5+2=7.'
      },
      {
        text: 'A ribbon is 1 metre long. Sita cuts 1/4 of it. How long is the cut piece in cm?',
        options: ['20 cm', '25 cm', '50 cm', '75 cm'],
        correct: 1,
        explanation: '1 metre = 100 cm. 1/4 of 100 = 25 cm.'
      }
    ],

    'Geometry': [
      {
        text: 'How many sides does a hexagon have?',
        options: ['5', '6', '7', '8'],
        correct: 1,
        explanation: 'A hexagon has 6 sides. "Hex" means six in Greek.'
      },
      {
        text: 'What is the perimeter of a square with side 5 cm?',
        options: ['10 cm', '15 cm', '20 cm', '25 cm'],
        correct: 2,
        explanation: 'Perimeter of a square = 4 × side = 4 × 5 = 20 cm.'
      },
      {
        text: 'What is the area of a rectangle with length 6 cm and width 4 cm?',
        options: ['10 sq cm', '20 sq cm', '24 sq cm', '28 sq cm'],
        correct: 2,
        explanation: 'Area of rectangle = length × width = 6 × 4 = 24 sq cm.'
      },
      {
        text: 'How many right angles does a rectangle have?',
        options: ['2', '3', '4', '1'],
        correct: 2,
        explanation: 'A rectangle has 4 corners and each corner is a right angle (90°).'
      },
      {
        text: 'A triangle has angles of 60°, 60°, and ___?',
        options: ['60°', '90°', '45°', '30°'],
        correct: 0,
        explanation: 'The sum of angles in a triangle is 180°. 60° + 60° + 60° = 180°.'
      },
      {
        text: 'How many sides does a pentagon have?',
        options: ['4', '5', '6', '7'],
        correct: 1,
        explanation: 'A pentagon has 5 sides. "Penta" means five.'
      },
      {
        text: 'What is the perimeter of a rectangle with length 8 cm and width 5 cm?',
        options: ['13 cm', '26 cm', '40 cm', '30 cm'],
        correct: 1,
        explanation: 'Perimeter of rectangle = 2 × (length + width) = 2 × (8+5) = 2 × 13 = 26 cm.'
      },
      {
        text: 'A square has a perimeter of 36 cm. What is the length of each side?',
        options: ['6 cm', '8 cm', '9 cm', '12 cm'],
        correct: 2,
        explanation: 'Perimeter of square = 4 × side. So side = 36 ÷ 4 = 9 cm.'
      },
      {
        text: 'How many faces does a cube have?',
        options: ['4', '6', '8', '12'],
        correct: 1,
        explanation: 'A cube has 6 faces (all squares).'
      },
      {
        text: 'What is the area of a square with side 7 cm?',
        options: ['28 sq cm', '35 sq cm', '49 sq cm', '14 sq cm'],
        correct: 2,
        explanation: 'Area of square = side × side = 7 × 7 = 49 sq cm.'
      },
      {
        text: 'Which shape has no corners?',
        options: ['Triangle', 'Square', 'Circle', 'Rectangle'],
        correct: 2,
        explanation: 'A circle has no corners (vertices). It is a curved shape.'
      },
      {
        text: 'How many edges does a cuboid have?',
        options: ['6', '8', '10', '12'],
        correct: 3,
        explanation: 'A cuboid has 12 edges.'
      },
      {
        text: 'What is the sum of all angles in a quadrilateral?',
        options: ['180°', '270°', '360°', '90°'],
        correct: 2,
        explanation: 'The sum of all angles in any quadrilateral is 360°.'
      },
      {
        text: 'A triangle with all sides equal is called?',
        options: ['Isosceles', 'Scalene', 'Equilateral', 'Right-angled'],
        correct: 2,
        explanation: 'An equilateral triangle has all three sides equal and all angles = 60°.'
      },
      {
        text: 'How many lines of symmetry does a square have?',
        options: ['1', '2', '4', '8'],
        correct: 2,
        explanation: 'A square has 4 lines of symmetry: 2 diagonal and 2 through midpoints of opposite sides.'
      },
      {
        text: 'What is the perimeter of a triangle with sides 5 cm, 7 cm, and 9 cm?',
        options: ['19 cm', '21 cm', '23 cm', '25 cm'],
        correct: 1,
        explanation: 'Perimeter of triangle = sum of all sides = 5 + 7 + 9 = 21 cm.'
      },
      {
        text: 'Which 3D shape has a circular base and one vertex (point) at the top?',
        options: ['Cylinder', 'Cone', 'Sphere', 'Cube'],
        correct: 1,
        explanation: 'A cone has a circular base and comes to a point (vertex) at the top.'
      },
      {
        text: 'How many vertices does a triangle have?',
        options: ['2', '3', '4', '5'],
        correct: 1,
        explanation: 'A triangle has 3 vertices (corners).'
      },
      {
        text: 'What is the area of a rectangle with length 10 cm and width 3 cm?',
        options: ['13 sq cm', '26 sq cm', '30 sq cm', '33 sq cm'],
        correct: 2,
        explanation: 'Area of rectangle = length × width = 10 × 3 = 30 sq cm.'
      },
      {
        text: 'A circle has how many lines of symmetry?',
        options: ['1', '4', '8', 'Infinite'],
        correct: 3,
        explanation: 'A circle has infinite lines of symmetry — any line through the centre divides it equally.'
      },
      {
        text: 'Which shape has 8 sides?',
        options: ['Hexagon', 'Heptagon', 'Octagon', 'Pentagon'],
        correct: 2,
        explanation: 'An octagon has 8 sides. "Octa" means eight.'
      }
    ],

    'Measurement': [
      {
        text: 'How many centimetres are in 1 metre?',
        options: ['10', '100', '1,000', '10,000'],
        correct: 1,
        explanation: '1 metre = 100 centimetres.'
      },
      {
        text: 'How many grams are in 1 kilogram?',
        options: ['10', '100', '1,000', '10,000'],
        correct: 2,
        explanation: '1 kilogram = 1,000 grams.'
      },
      {
        text: 'A ribbon is 3 m 50 cm long. What is its length in centimetres?',
        options: ['305 cm', '350 cm', '300 cm', '353 cm'],
        correct: 1,
        explanation: '3 m = 300 cm. 300 + 50 = 350 cm.'
      },
      {
        text: 'How many millilitres are in 1 litre?',
        options: ['10', '100', '1,000', '500'],
        correct: 2,
        explanation: '1 litre = 1,000 millilitres.'
      },
      {
        text: 'A bag weighs 2 kg 500 g. What is its weight in grams?',
        options: ['2,050 g', '2,500 g', '2,005 g', '25,000 g'],
        correct: 1,
        explanation: '2 kg = 2,000 g. 2,000 + 500 = 2,500 g.'
      },
      {
        text: 'How many metres are in 1 kilometre?',
        options: ['10', '100', '1,000', '10,000'],
        correct: 2,
        explanation: '1 kilometre = 1,000 metres.'
      },
      {
        text: 'A rope is 5 m 25 cm long. What is its length in cm?',
        options: ['525 cm', '550 cm', '505 cm', '552 cm'],
        correct: 0,
        explanation: '5 m = 500 cm. 500 + 25 = 525 cm.'
      },
      {
        text: 'How many days are in a leap year?',
        options: ['364', '365', '366', '367'],
        correct: 2,
        explanation: 'A leap year has 366 days (February has 29 days instead of 28).'
      },
      {
        text: 'Convert 3,500 g to kg and g.',
        options: ['3 kg 500 g', '35 kg', '3 kg 50 g', '30 kg 500 g'],
        correct: 0,
        explanation: '3,500 g = 3 kg 500 g (since 1 kg = 1000 g).'
      },
      {
        text: 'How many millimetres are in 5 cm?',
        options: ['5', '50', '500', '0.5'],
        correct: 1,
        explanation: '1 cm = 10 mm. So 5 cm = 5 × 10 = 50 mm.'
      },
      {
        text: 'A bottle holds 2 litres of water. How many 250 ml glasses can be filled?',
        options: ['4', '6', '8', '10'],
        correct: 2,
        explanation: '2 litres = 2000 ml. 2000 ÷ 250 = 8 glasses.'
      },
      {
        text: 'What is 2 km 300 m in metres?',
        options: ['2,300 m', '2,030 m', '230 m', '23,000 m'],
        correct: 0,
        explanation: '2 km = 2,000 m. 2,000 + 300 = 2,300 m.'
      },
      {
        text: 'How many weeks are in a year?',
        options: ['48', '50', '52', '54'],
        correct: 2,
        explanation: 'A year has 52 weeks (365 ÷ 7 ≈ 52).'
      },
      {
        text: 'A pencil is 15 cm long. What is its length in mm?',
        options: ['15 mm', '150 mm', '1500 mm', '1.5 mm'],
        correct: 1,
        explanation: '1 cm = 10 mm. So 15 cm = 15 × 10 = 150 mm.'
      },
      {
        text: 'Which is heavier: 1 kg or 900 g?',
        options: ['900 g', '1 kg', 'Both are equal', 'Cannot compare'],
        correct: 1,
        explanation: '1 kg = 1000 g. Since 1000 > 900, 1 kg is heavier.'
      },
      {
        text: 'How many months have 31 days?',
        options: ['5', '6', '7', '8'],
        correct: 2,
        explanation: '7 months have 31 days: Jan, Mar, May, Jul, Aug, Oct, Dec.'
      },
      {
        text: 'Convert 4 litres 500 ml to ml.',
        options: ['4,500 ml', '4,050 ml', '450 ml', '45,000 ml'],
        correct: 0,
        explanation: '4 litres = 4,000 ml. 4,000 + 500 = 4,500 ml.'
      },
      {
        text: 'A table is 1 m 50 cm tall. What is its height in cm?',
        options: ['150 cm', '105 cm', '115 cm', '160 cm'],
        correct: 0,
        explanation: '1 m = 100 cm. 100 + 50 = 150 cm.'
      },
      {
        text: 'Which is longer: 2 km or 1,500 m?',
        options: ['1,500 m', '2 km', 'Both are equal', 'Cannot compare'],
        correct: 1,
        explanation: '2 km = 2,000 m. Since 2,000 > 1,500, 2 km is longer.'
      },
      {
        text: 'How many seconds are in 5 minutes?',
        options: ['50', '100', '300', '500'],
        correct: 2,
        explanation: '1 minute = 60 seconds. 5 minutes = 5 × 60 = 300 seconds.'
      },
      {
        text: 'A watermelon weighs 3 kg 250 g. What is its weight in grams?',
        options: ['3,250 g', '3,025 g', '325 g', '32,500 g'],
        correct: 0,
        explanation: '3 kg = 3,000 g. 3,000 + 250 = 3,250 g.'
      }
    ],

    'Time & Money': [
      {
        text: 'How many minutes are in 2 hours?',
        options: ['60', '100', '120', '180'],
        correct: 2,
        explanation: '1 hour = 60 minutes. 2 hours = 2 × 60 = 120 minutes.'
      },
      {
        text: 'A movie starts at 3:30 PM and lasts 2 hours. When does it end?',
        options: ['5:00 PM', '5:30 PM', '6:00 PM', '4:30 PM'],
        correct: 1,
        explanation: '3:30 PM + 2 hours = 5:30 PM.'
      },
      {
        text: 'Anu has ₹50. She buys a pen for ₹12 and a notebook for ₹25. How much money is left?',
        options: ['₹13', '₹15', '₹17', '₹23'],
        correct: 0,
        explanation: '₹12 + ₹25 = ₹37 spent. ₹50 − ₹37 = ₹13 left.'
      },
      {
        text: 'How many seconds are in 1 minute?',
        options: ['30', '60', '100', '120'],
        correct: 1,
        explanation: '1 minute = 60 seconds.'
      },
      {
        text: 'If 1 dozen eggs costs ₹60, how much do 2 dozen eggs cost?',
        options: ['₹100', '₹110', '₹120', '₹130'],
        correct: 2,
        explanation: '1 dozen = ₹60. 2 dozen = 2 × ₹60 = ₹120.'
      },
      {
        text: 'A train departs at 9:45 AM and arrives at 12:15 PM. How long is the journey?',
        options: ['2 hours 15 min', '2 hours 30 min', '3 hours', '2 hours 45 min'],
        correct: 1,
        explanation: 'From 9:45 to 12:15 = 2 hours 30 minutes.'
      },
      {
        text: 'How many ₹5 coins make ₹100?',
        options: ['10', '15', '20', '25'],
        correct: 2,
        explanation: '₹100 ÷ ₹5 = 20 coins.'
      },
      {
        text: 'What time will it be 3 hours after 10:30 AM?',
        options: ['12:30 PM', '1:30 PM', '2:30 PM', '11:30 AM'],
        correct: 1,
        explanation: '10:30 AM + 3 hours = 1:30 PM.'
      },
      {
        text: 'Ravi has ₹500. He buys a toy for ₹175 and a book for ₹225. How much is left?',
        options: ['₹100', '₹150', '₹200', '₹50'],
        correct: 0,
        explanation: '₹175 + ₹225 = ₹400 spent. ₹500 − ₹400 = ₹100 left.'
      },
      {
        text: 'How many hours are in 2 days?',
        options: ['24', '36', '48', '72'],
        correct: 2,
        explanation: '1 day = 24 hours. 2 days = 2 × 24 = 48 hours.'
      },
      {
        text: 'A pencil costs ₹8. How much do 15 pencils cost?',
        options: ['₹100', '₹110', '₹120', '₹130'],
        correct: 2,
        explanation: '₹8 × 15 = ₹120.'
      },
      {
        text: 'What is the time 45 minutes before 2:00 PM?',
        options: ['1:15 PM', '1:45 PM', '12:15 PM', '1:00 PM'],
        correct: 0,
        explanation: '2:00 PM minus 45 minutes = 1:15 PM.'
      },
      {
        text: 'How many ₹2 coins are needed to make ₹50?',
        options: ['20', '25', '30', '50'],
        correct: 1,
        explanation: '₹50 ÷ ₹2 = 25 coins.'
      },
      {
        text: 'A class starts at 8:00 AM and ends at 1:30 PM. How long is the school day?',
        options: ['4 hours 30 min', '5 hours', '5 hours 30 min', '6 hours'],
        correct: 2,
        explanation: 'From 8:00 AM to 1:30 PM = 5 hours 30 minutes.'
      },
      {
        text: 'Meera bought 3 notebooks at ₹45 each and 2 pens at ₹15 each. What is the total cost?',
        options: ['₹155', '₹165', '₹175', '₹145'],
        correct: 1,
        explanation: 'Notebooks: 3 × ₹45 = ₹135. Pens: 2 × ₹15 = ₹30. Total = ₹135 + ₹30 = ₹165.'
      },
      {
        text: 'How many minutes are in 3 hours 15 minutes?',
        options: ['180', '195', '200', '315'],
        correct: 1,
        explanation: '3 hours = 180 minutes. 180 + 15 = 195 minutes.'
      },
      {
        text: 'If today is Wednesday, what day will it be after 10 days?',
        options: ['Friday', 'Saturday', 'Sunday', 'Monday'],
        correct: 1,
        explanation: '10 days = 1 week + 3 days. Wednesday + 3 days = Saturday.'
      },
      {
        text: 'A shopkeeper gives ₹35 change from ₹100. How much did the item cost?',
        options: ['₹55', '₹65', '₹75', '₹45'],
        correct: 1,
        explanation: 'Cost = ₹100 − ₹35 = ₹65.'
      },
      {
        text: 'How many days are in the month of February in a non-leap year?',
        options: ['28', '29', '30', '31'],
        correct: 0,
        explanation: 'February has 28 days in a non-leap year and 29 days in a leap year.'
      },
      {
        text: 'A movie is 2 hours 15 minutes long. It starts at 4:00 PM. When does it end?',
        options: ['6:00 PM', '6:15 PM', '6:30 PM', '5:45 PM'],
        correct: 1,
        explanation: '4:00 PM + 2 hours 15 minutes = 6:15 PM.'
      },
      {
        text: 'Anu has three ₹100 notes, two ₹50 notes, and five ₹10 coins. How much money does she have?',
        options: ['₹400', '₹450', '₹350', '₹500'],
        correct: 1,
        explanation: '3×₹100 = ₹300. 2×₹50 = ₹100. 5×₹10 = ₹50. Total = ₹300+₹100+₹50 = ₹450.'
      }
    ]

  }, // end Math

  // ─────────────────────────────────────────────
  // SCIENCE  (7 topics)
  // ─────────────────────────────────────────────
  Science: {

    'Plants': [
      {
        text: 'Which part of the plant makes food using sunlight?',
        options: ['Root', 'Stem', 'Leaf', 'Flower'],
        correct: 2,
        explanation: 'Leaves make food for the plant through a process called photosynthesis using sunlight.'
      },
      {
        text: 'What do roots do for a plant?',
        options: ['Make food', 'Absorb water and minerals from soil', 'Produce seeds', 'Attract insects'],
        correct: 1,
        explanation: 'Roots absorb water and minerals from the soil and anchor the plant.'
      },
      {
        text: 'Which gas do plants release during photosynthesis?',
        options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
        correct: 2,
        explanation: 'During photosynthesis, plants take in carbon dioxide and release oxygen.'
      },
      {
        text: 'What is the process by which plants make their own food called?',
        options: ['Respiration', 'Photosynthesis', 'Digestion', 'Germination'],
        correct: 1,
        explanation: 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to make food.'
      },
      {
        text: 'Which part of the plant carries water from roots to leaves?',
        options: ['Flower', 'Fruit', 'Stem', 'Seed'],
        correct: 2,
        explanation: 'The stem carries water and nutrients from the roots up to the leaves.'
      },
// ═══ PLANTS — Add after last question in 'Plants' array ═══

      {
        text: 'Which part of the plant makes food?',
        options: ['Root', 'Stem', 'Leaf', 'Flower'],
        correct: 2,
        explanation: 'Leaves make food through photosynthesis using sunlight, water, and carbon dioxide.'
      },
      {
        text: 'What is the process by which plants make their own food called?',
        options: ['Respiration', 'Photosynthesis', 'Germination', 'Pollination'],
        correct: 1,
        explanation: 'Photosynthesis is the process where plants use sunlight, water, and CO₂ to make food.'
      },
      {
        text: 'Which gas do plants release during photosynthesis?',
        options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
        correct: 2,
        explanation: 'Plants release oxygen during photosynthesis, which we breathe in.'
      },
      {
        text: 'Which of these is an insectivorous plant?',
        options: ['Rose', 'Venus flytrap', 'Mango', 'Tulsi'],
        correct: 1,
        explanation: 'Venus flytrap catches and digests insects to get nutrients from poor soil.'
      },
      {
        text: 'Seeds are dispersed by which of the following?',
        options: ['Wind only', 'Water only', 'Animals only', 'Wind, water, animals, and explosion'],
        correct: 3,
        explanation: 'Seeds are dispersed by wind, water, animals, and even by bursting of fruits (explosion).'
      },
      {
        text: 'Which part of the plant absorbs water from the soil?',
        options: ['Leaf', 'Stem', 'Root', 'Flower'],
        correct: 2,
        explanation: 'Roots absorb water and minerals from the soil.'
      },
      {
        text: 'What is germination?',
        options: ['Falling of leaves', 'Growing of a seed into a plant', 'Making of food', 'Spreading of seeds'],
        correct: 1,
        explanation: 'Germination is the process where a seed sprouts and begins to grow into a new plant.'
      },
      {
        text: 'Which plant stores food in its roots?',
        options: ['Potato', 'Carrot', 'Spinach', 'Sugarcane'],
        correct: 1,
        explanation: 'Carrot stores food in its root. Potato stores in stem (tuber), sugarcane in stem.'
      },
      {
        text: 'What is the function of a flower in a plant?',
        options: ['To make food', 'To absorb water', 'To help in reproduction', 'To transport water'],
        correct: 2,
        explanation: 'Flowers help in reproduction. They produce seeds that grow into new plants.'
      },
      {
        text: 'Which of these plants has a tap root?',
        options: ['Wheat', 'Grass', 'Mango', 'Onion'],
        correct: 2,
        explanation: 'Mango has a tap root (one main root going deep). Wheat and grass have fibrous roots.'
      },
      {
        text: 'Cactus has spines instead of leaves. Why?',
        options: ['To look beautiful', 'To reduce water loss', 'To catch insects', 'To make more food'],
        correct: 1,
        explanation: 'Cactus lives in deserts. Spines reduce water loss by reducing the surface area for evaporation.'
      },
      {
        text: 'Which part of the plant carries water from roots to leaves?',
        options: ['Root', 'Stem', 'Leaf', 'Flower'],
        correct: 1,
        explanation: 'The stem transports water and minerals from roots to leaves through tiny tubes.'
      },
      {
        text: 'What do we call plants that live for many years?',
        options: ['Annuals', 'Biennials', 'Perennials', 'Herbs'],
        correct: 2,
        explanation: 'Perennial plants live for many years (e.g., mango tree, neem tree).'
      },
      {
        text: 'Mushroom is not a plant because it:',
        options: ['Has no roots', 'Cannot make its own food', 'Grows in dark', 'Is very small'],
        correct: 1,
        explanation: 'Mushroom is a fungus. It cannot make food by photosynthesis as it has no chlorophyll.'
      },
      {
        text: 'Which of these is a water plant?',
        options: ['Cactus', 'Lotus', 'Neem', 'Rose'],
        correct: 1,
        explanation: 'Lotus is an aquatic (water) plant. It grows in ponds and lakes.'
      },
      {
        text: 'Pollination is the transfer of pollen from:',
        options: ['Root to stem', 'Leaf to flower', 'Anther to stigma', 'Seed to soil'],
        correct: 2,
        explanation: 'Pollination is the transfer of pollen grains from the anther (male part) to the stigma (female part) of a flower.'
      }
    ],

    'Animals': [
      {
        text: 'Which animal is a mammal?',
        options: ['Frog', 'Snake', 'Whale', 'Eagle'],
        correct: 2,
        explanation: 'Whales are mammals. They breathe air, give birth to live young, and feed them milk.'
      },
      {
        text: 'What do herbivores eat?',
        options: ['Only meat', 'Only plants', 'Both plants and meat', 'Only insects'],
        correct: 1,
        explanation: 'Herbivores eat only plants. Examples include cows, rabbits, and deer.'
      },
      {
        text: 'Which animal lays eggs?',
        options: ['Dog', 'Cat', 'Hen', 'Cow'],
        correct: 2,
        explanation: 'Hens (chickens) lay eggs. They are birds, and most birds lay eggs.'
      },
      {
        text: 'What is the young one of a butterfly called?',
        options: ['Larva', 'Pupa', 'Caterpillar', 'Nymph'],
        correct: 2,
        explanation: 'The young one of a butterfly is called a caterpillar (larva stage). It later becomes a pupa and then a butterfly.'
      },
      {
        text: 'Which of these animals lives both on land and in water?',
        options: ['Lion', 'Frog', 'Eagle', 'Camel'],
        correct: 1,
        explanation: 'Frogs are amphibians. They can live both on land and in water.'
      },
// ═══ ANIMALS — Add after last question in 'Animals' array ═══

      {
        text: 'Which of these animals is a mammal?',
        options: ['Snake', 'Frog', 'Dolphin', 'Crow'],
        correct: 2,
        explanation: 'Dolphins are mammals — they breathe air, are warm-blooded, and feed milk to their young.'
      },
      {
        text: 'Animals that eat both plants and animals are called:',
        options: ['Herbivores', 'Carnivores', 'Omnivores', 'Decomposers'],
        correct: 2,
        explanation: 'Omnivores eat both plants and animals. Examples: bear, crow, human.'
      },
      {
        text: 'Which animal breathes through gills?',
        options: ['Whale', 'Fish', 'Frog', 'Turtle'],
        correct: 1,
        explanation: 'Fish breathe through gills which extract oxygen from water.'
      },
      {
        text: 'A caterpillar changes into a butterfly. This process is called:',
        options: ['Germination', 'Metamorphosis', 'Hibernation', 'Migration'],
        correct: 1,
        explanation: 'Metamorphosis is the process of transformation from larva to adult (caterpillar → butterfly).'
      },
      {
        text: 'Which of these is a cold-blooded animal?',
        options: ['Dog', 'Parrot', 'Lizard', 'Cat'],
        correct: 2,
        explanation: 'Lizards are cold-blooded — their body temperature changes with the environment.'
      },
      {
        text: 'Animals that are active at night are called:',
        options: ['Diurnal', 'Nocturnal', 'Aquatic', 'Terrestrial'],
        correct: 1,
        explanation: 'Nocturnal animals are active at night. Examples: owl, bat, mouse.'
      },
      {
        text: 'Which animal lays eggs but is NOT a bird?',
        options: ['Parrot', 'Crow', 'Crocodile', 'Sparrow'],
        correct: 2,
        explanation: 'Crocodiles lay eggs but they are reptiles, not birds.'
      },
      {
        text: 'What is the outer covering of a fish called?',
        options: ['Fur', 'Feathers', 'Scales', 'Shell'],
        correct: 2,
        explanation: 'Fish have scales on their body that protect them and help them swim smoothly.'
      },
      {
        text: 'Which animal carries its home on its back?',
        options: ['Crab', 'Snail', 'Spider', 'Ant'],
        correct: 1,
        explanation: 'A snail carries its shell (home) on its back for protection.'
      },
      {
        text: 'Hibernation means:',
        options: ['Moving to a warmer place', 'Sleeping through winter', 'Hunting at night', 'Living in water'],
        correct: 1,
        explanation: 'Hibernation is a deep sleep during winter to save energy when food is scarce.'
      },
      {
        text: 'Which of these animals is an amphibian?',
        options: ['Snake', 'Frog', 'Fish', 'Crow'],
        correct: 1,
        explanation: 'Frogs are amphibians — they can live both on land and in water.'
      },
      {
        text: 'A group of fish is called a:',
        options: ['Flock', 'Herd', 'School', 'Pack'],
        correct: 2,
        explanation: 'A group of fish swimming together is called a school.'
      },
      {
        text: 'Which body part helps a bird to fly?',
        options: ['Beak', 'Wings', 'Claws', 'Tail only'],
        correct: 1,
        explanation: 'Wings help birds fly. They are specially designed with feathers for flight.'
      },
      {
        text: 'Which animal is known as the "Ship of the Desert"?',
        options: ['Horse', 'Camel', 'Elephant', 'Donkey'],
        correct: 1,
        explanation: 'Camel is called the Ship of the Desert because it can travel long distances in deserts.'
      },
      {
        text: 'Silk is obtained from:',
        options: ['Spider', 'Silkworm', 'Honeybee', 'Butterfly'],
        correct: 1,
        explanation: 'Silk is obtained from the cocoon of the silkworm.'
      },
      {
        text: 'Which of these is NOT an insect?',
        options: ['Ant', 'Butterfly', 'Spider', 'Beetle'],
        correct: 2,
        explanation: 'Spiders have 8 legs and are arachnids, not insects. Insects have 6 legs.'
      }
    ],

    'Human Body': [
      {
        text: 'How many bones are in the adult human body?',
        options: ['106', '206', '306', '406'],
        correct: 1,
        explanation: 'The adult human body has 206 bones.'
      },
      {
        text: 'Which organ pumps blood throughout the body?',
        options: ['Lungs', 'Brain', 'Heart', 'Liver'],
        correct: 2,
        explanation: 'The heart pumps blood to all parts of the body through blood vessels.'
      },
      {
        text: 'Which organ is used for breathing?',
        options: ['Heart', 'Stomach', 'Lungs', 'Kidneys'],
        correct: 2,
        explanation: 'We use our lungs to breathe. They take in oxygen and release carbon dioxide.'
      },
      {
        text: 'What is the largest organ of the human body?',
        options: ['Heart', 'Liver', 'Skin', 'Brain'],
        correct: 2,
        explanation: 'The skin is the largest organ of the human body. It covers and protects the entire body.'
      },
      {
        text: 'Which part of the body controls all our actions and thoughts?',
        options: ['Heart', 'Lungs', 'Stomach', 'Brain'],
        correct: 3,
        explanation: 'The brain controls all our actions, thoughts, and feelings. It is the control centre of the body.'
      },
// ═══ HUMAN BODY — Add after last question in 'Human Body' array ═══

      {
        text: 'How many bones does an adult human body have?',
        options: ['106', '206', '306', '406'],
        correct: 1,
        explanation: 'An adult human body has 206 bones.'
      },
      {
        text: 'Which organ pumps blood throughout the body?',
        options: ['Brain', 'Lungs', 'Heart', 'Kidney'],
        correct: 2,
        explanation: 'The heart pumps blood to all parts of the body through blood vessels.'
      },
      {
        text: 'What is the largest organ of the human body?',
        options: ['Heart', 'Liver', 'Skin', 'Brain'],
        correct: 2,
        explanation: 'Skin is the largest organ. It covers and protects the entire body.'
      },
      {
        text: 'Which part of the body helps us breathe?',
        options: ['Heart', 'Lungs', 'Stomach', 'Kidney'],
        correct: 1,
        explanation: 'Lungs help us breathe by taking in oxygen and releasing carbon dioxide.'
      },
      {
        text: 'Food is digested mainly in the:',
        options: ['Mouth', 'Stomach', 'Small intestine', 'Large intestine'],
        correct: 2,
        explanation: 'Most digestion and absorption of food happens in the small intestine.'
      },
      {
        text: 'Which sense organ helps us to smell?',
        options: ['Eyes', 'Ears', 'Nose', 'Tongue'],
        correct: 2,
        explanation: 'The nose is the sense organ for smell.'
      },
      {
        text: 'What protects the brain?',
        options: ['Ribs', 'Skull', 'Spine', 'Skin'],
        correct: 1,
        explanation: 'The skull is a hard bony structure that protects the brain.'
      },
      {
        text: 'Which type of teeth are used for tearing food?',
        options: ['Incisors', 'Canines', 'Premolars', 'Molars'],
        correct: 1,
        explanation: 'Canines are pointed teeth used for tearing food (like meat).'
      },
      {
        text: 'Blood is filtered and cleaned by the:',
        options: ['Heart', 'Liver', 'Kidneys', 'Lungs'],
        correct: 2,
        explanation: 'Kidneys filter blood and remove waste products as urine.'
      },
      {
        text: 'How many sense organs do we have?',
        options: ['3', '4', '5', '6'],
        correct: 2,
        explanation: 'We have 5 sense organs: eyes (sight), ears (hearing), nose (smell), tongue (taste), skin (touch).'
      },
      {
        text: 'Which part of the body controls all other body parts?',
        options: ['Heart', 'Brain', 'Stomach', 'Lungs'],
        correct: 1,
        explanation: 'The brain controls all body functions — thinking, movement, breathing, and more.'
      },
      {
        text: 'The backbone is also called the:',
        options: ['Skull', 'Ribs', 'Spine', 'Pelvis'],
        correct: 2,
        explanation: 'The backbone (spine) is made of 33 small bones called vertebrae.'
      },
      {
        text: 'Which blood vessels carry blood away from the heart?',
        options: ['Veins', 'Arteries', 'Capillaries', 'Nerves'],
        correct: 1,
        explanation: 'Arteries carry blood away from the heart to all body parts.'
      },
      {
        text: 'What is the function of white blood cells?',
        options: ['Carry oxygen', 'Fight germs', 'Clot blood', 'Digest food'],
        correct: 1,
        explanation: 'White blood cells (WBCs) fight germs and protect the body from diseases.'
      },
      {
        text: 'The joint at the knee is a:',
        options: ['Fixed joint', 'Ball and socket joint', 'Hinge joint', 'Pivot joint'],
        correct: 2,
        explanation: 'The knee has a hinge joint — it allows movement in one direction only (like a door hinge).'
      },
      {
        text: 'Which organ produces bile juice?',
        options: ['Stomach', 'Pancreas', 'Liver', 'Kidney'],
        correct: 2,
        explanation: 'The liver produces bile juice which helps in digesting fats.'
      }
    ],

    'Food & Nutrition': [
      {
        text: 'Which nutrient gives us energy to work and play?',
        options: ['Vitamins', 'Minerals', 'Carbohydrates', 'Water'],
        correct: 2,
        explanation: 'Carbohydrates are the main source of energy for our body. Rice, bread, and potatoes are rich in carbohydrates.'
      },
      {
        text: 'Which food is a good source of protein?',
        options: ['Rice', 'Eggs', 'Sugar', 'Oil'],
        correct: 1,
        explanation: 'Eggs are rich in protein. Protein helps build and repair our body muscles.'
      },
      {
        text: 'Which vitamin do we get from sunlight?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correct: 3,
        explanation: 'Our skin makes Vitamin D when exposed to sunlight. It helps keep our bones strong.'
      },
      {
        text: 'Which food group do milk, cheese, and yogurt belong to?',
        options: ['Grains', 'Fruits', 'Dairy', 'Vegetables'],
        correct: 2,
        explanation: 'Milk, cheese, and yogurt are dairy products. They are rich in calcium which strengthens bones and teeth.'
      },
      {
        text: 'What is a balanced diet?',
        options: [
          'Eating only fruits and vegetables',
          'Eating food from all food groups in the right amounts',
          'Eating only proteins',
          'Eating as much as you want'
        ],
        correct: 1,
        explanation: 'A balanced diet includes the right amounts of carbohydrates, proteins, fats, vitamins, minerals, and water.'
      },
// ═══ FOOD & NUTRITION — Add after last question in 'Food & Nutrition' array ═══

      {
        text: 'Which vitamin do we get from sunlight?',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correct: 3,
        explanation: 'Vitamin D is produced in our skin when exposed to sunlight. It helps in strong bones.'
      },
      {
        text: 'Which nutrient gives us the most energy?',
        options: ['Vitamins', 'Minerals', 'Carbohydrates', 'Water'],
        correct: 2,
        explanation: 'Carbohydrates are the main source of energy for our body. Found in rice, bread, potatoes.'
      },
      {
        text: 'Scurvy is caused by the deficiency of:',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correct: 2,
        explanation: 'Scurvy (bleeding gums, weakness) is caused by lack of Vitamin C. Found in citrus fruits.'
      },
      {
        text: 'Which of these is a protein-rich food?',
        options: ['Rice', 'Butter', 'Dal (lentils)', 'Sugar'],
        correct: 2,
        explanation: 'Dal (lentils) is rich in protein which helps in body growth and repair.'
      },
      {
        text: 'Night blindness is caused by deficiency of:',
        options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
        correct: 0,
        explanation: 'Vitamin A deficiency causes night blindness. Found in carrots, papaya, and green vegetables.'
      },
      {
        text: 'Which mineral makes our bones and teeth strong?',
        options: ['Iron', 'Calcium', 'Iodine', 'Potassium'],
        correct: 1,
        explanation: 'Calcium makes bones and teeth strong. Found in milk, cheese, and green leafy vegetables.'
      },
      {
        text: 'Roughage (fibre) helps in:',
        options: ['Building muscles', 'Digestion', 'Fighting diseases', 'Giving energy'],
        correct: 1,
        explanation: 'Roughage (dietary fibre) helps in digestion and prevents constipation. Found in fruits and vegetables.'
      },
      {
        text: 'Which food group should we eat the most of?',
        options: ['Fats and oils', 'Proteins', 'Cereals and grains', 'Sweets'],
        correct: 2,
        explanation: 'Cereals and grains (rice, wheat, oats) should form the largest part of our diet for energy.'
      },
      {
        text: 'Iron deficiency causes:',
        options: ['Goitre', 'Anaemia', 'Scurvy', 'Rickets'],
        correct: 1,
        explanation: 'Iron deficiency causes anaemia (low haemoglobin, tiredness, weakness).'
      },
      {
        text: 'Which of these is NOT a junk food?',
        options: ['Chips', 'Burger', 'Sprouts', 'Pizza'],
        correct: 2,
        explanation: 'Sprouts are healthy food rich in proteins and vitamins. The others are junk food.'
      },
      {
        text: 'Iodine deficiency causes:',
        options: ['Anaemia', 'Goitre', 'Scurvy', 'Night blindness'],
        correct: 1,
        explanation: 'Iodine deficiency causes goitre (swelling of thyroid gland in the neck).'
      },
      {
        text: 'Which nutrient helps in repairing body tissues?',
        options: ['Carbohydrates', 'Fats', 'Proteins', 'Vitamins'],
        correct: 2,
        explanation: 'Proteins help in growth and repair of body tissues. Called body-building food.'
      },
      {
        text: 'A balanced diet contains:',
        options: ['Only proteins', 'Only carbohydrates', 'All nutrients in right amounts', 'Only vitamins'],
        correct: 2,
        explanation: 'A balanced diet has all nutrients (carbohydrates, proteins, fats, vitamins, minerals, water) in proper amounts.'
      },
      {
        text: 'Which of these foods is rich in Vitamin C?',
        options: ['Rice', 'Milk', 'Orange', 'Egg'],
        correct: 2,
        explanation: 'Oranges and other citrus fruits are rich in Vitamin C which prevents scurvy.'
      },
      {
        text: 'Fats are stored in our body to:',
        options: ['Fight germs', 'Provide energy reserve and insulation', 'Build bones', 'Help in breathing'],
        correct: 1,
        explanation: 'Fats provide stored energy and insulate the body to keep it warm.'
      },
      {
        text: 'Which of these is a preservative used in food?',
        options: ['Sugar', 'Salt', 'Vinegar', 'All of these'],
        correct: 3,
        explanation: 'Sugar, salt, and vinegar are all natural preservatives used to keep food fresh longer.'
      }
    ],

    'Matter': [
      {
        text: 'Which of these is an example of a solid?',
        options: ['Water', 'Air', 'Wood', 'Milk'],
        correct: 2,
        explanation: 'Wood is a solid. Solids have a definite shape and volume.'
      },
      {
        text: 'What happens to water when it is heated to 100°C?',
        options: ['It freezes', 'It evaporates into steam', 'It becomes ice', 'It turns into milk'],
        correct: 1,
        explanation: 'Water boils and turns into steam (water vapour) at 100°C. This is called evaporation or boiling.'
      },
      {
        text: 'Which state of matter has no fixed shape but has a fixed volume?',
        options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
        correct: 1,
        explanation: 'Liquids have no fixed shape (they take the shape of their container) but have a fixed volume.'
      },
      {
        text: 'What is the process of water turning into ice called?',
        options: ['Melting', 'Evaporation', 'Freezing', 'Condensation'],
        correct: 2,
        explanation: 'When water cools down to 0°C, it turns into ice. This process is called freezing.'
      },
      {
        text: 'Which of these is a gas?',
        options: ['Salt', 'Iron', 'Oxygen', 'Honey'],
        correct: 2,
        explanation: 'Oxygen is a gas. We breathe oxygen to stay alive.'
      },
// ═══ MATTER — Add after last question in 'Matter' array ═══

      {
        text: 'Which of these is a liquid?',
        options: ['Ice', 'Steam', 'Water', 'Snow'],
        correct: 2,
        explanation: 'Water is a liquid. Ice and snow are solid forms, and steam is the gas form of water.'
      },
      {
        text: 'What happens when water is heated to 100°C?',
        options: ['It freezes', 'It evaporates', 'It boils and turns to steam', 'Nothing happens'],
        correct: 2,
        explanation: 'Water boils at 100°C and turns into steam (water vapour) — this is called boiling.'
      },
      {
        text: 'Which material is transparent?',
        options: ['Wood', 'Cardboard', 'Glass', 'Metal'],
        correct: 2,
        explanation: 'Glass is transparent — light can pass through it completely and we can see through it.'
      },
      {
        text: 'Solids have:',
        options: ['Fixed shape and fixed volume', 'No fixed shape but fixed volume', 'No fixed shape and no fixed volume', 'Fixed shape but no fixed volume'],
        correct: 0,
        explanation: 'Solids have both fixed shape and fixed volume. They do not flow.'
      },
      {
        text: 'Which change is reversible?',
        options: ['Burning paper', 'Melting ice', 'Cooking food', 'Rusting of iron'],
        correct: 1,
        explanation: 'Melting ice is reversible — you can freeze water back into ice. Burning and cooking cannot be undone.'
      },
      {
        text: 'Evaporation is the process of:',
        options: ['Solid to liquid', 'Liquid to gas', 'Gas to liquid', 'Solid to gas'],
        correct: 1,
        explanation: 'Evaporation is when a liquid slowly changes to gas (vapour) at any temperature.'
      },
      {
        text: 'Which of these is a good conductor of heat?',
        options: ['Wood', 'Plastic', 'Iron', 'Rubber'],
        correct: 2,
        explanation: 'Iron (metal) is a good conductor of heat. Wood, plastic, and rubber are insulators.'
      },
      {
        text: 'What is the process of gas changing to liquid called?',
        options: ['Evaporation', 'Condensation', 'Melting', 'Freezing'],
        correct: 1,
        explanation: 'Condensation is when gas (vapour) cools down and changes back to liquid.'
      },
      {
        text: 'Which of these dissolves in water?',
        options: ['Sand', 'Salt', 'Stone', 'Oil'],
        correct: 1,
        explanation: 'Salt dissolves in water to form a solution. Sand, stone, and oil do not dissolve.'
      },
      {
        text: 'Rusting of iron is a:',
        options: ['Reversible change', 'Physical change', 'Irreversible change', 'No change'],
        correct: 2,
        explanation: 'Rusting is an irreversible chemical change — you cannot get back the original iron from rust.'
      },
      {
        text: 'Which state of matter has particles that are very far apart?',
        options: ['Solid', 'Liquid', 'Gas', 'All have same spacing'],
        correct: 2,
        explanation: 'In gases, particles are very far apart and move freely in all directions.'
      },
      {
        text: 'Water freezes at:',
        options: ['100°C', '50°C', '0°C', '-10°C'],
        correct: 2,
        explanation: 'Water freezes (becomes ice) at 0°C. This is called the freezing point.'
      },
      {
        text: 'Which material is a poor conductor of electricity?',
        options: ['Copper', 'Iron', 'Rubber', 'Aluminium'],
        correct: 2,
        explanation: 'Rubber is a poor conductor (insulator) of electricity. Metals are good conductors.'
      },
      {
        text: 'Mixing salt in water is a:',
        options: ['Chemical change', 'Irreversible change', 'Physical change', 'No change'],
        correct: 2,
        explanation: 'Dissolving salt in water is a physical change — you can get salt back by evaporating water.'
      },
      {
        text: 'Which of these is an opaque material?',
        options: ['Clear glass', 'Tracing paper', 'Brick wall', 'Clean water'],
        correct: 2,
        explanation: 'A brick wall is opaque — no light can pass through it.'
      },
      {
        text: 'Air is a:',
        options: ['Pure substance', 'Mixture of gases', 'Liquid', 'Solid'],
        correct: 1,
        explanation: 'Air is a mixture of gases — mainly nitrogen (78%) and oxygen (21%).'
      }
    ],

    'Force & Motion': [
      {
        text: 'What is a push or pull called?',
        options: ['Energy', 'Force', 'Motion', 'Speed'],
        correct: 1,
        explanation: 'A push or pull applied on an object is called a force.'
      },
      {
        text: 'Which force pulls objects towards the Earth?',
        options: ['Magnetic force', 'Friction', 'Gravity', 'Electric force'],
        correct: 2,
        explanation: 'Gravity is the force that pulls all objects towards the Earth.'
      },
      {
        text: 'What does friction do to a moving object?',
        options: ['Speeds it up', 'Slows it down', 'Has no effect', 'Makes it float'],
        correct: 1,
        explanation: 'Friction is a force that opposes motion. It slows down moving objects.'
      },
      {
        text: 'A ball rolling on the floor eventually stops. What force causes this?',
        options: ['Gravity', 'Magnetic force', 'Friction', 'Electric force'],
        correct: 2,
        explanation: 'Friction between the ball and the floor surface slows the ball down and eventually stops it.'
      },
      {
        text: 'Which simple machine is used to lift heavy objects easily?',
        options: ['Wheel', 'Pulley', 'Wedge', 'Screw'],
        correct: 1,
        explanation: 'A pulley is a simple machine that makes it easier to lift heavy objects by changing the direction of force.'
      },
// ═══ FORCE & MOTION — Add after last question in 'Force & Motion' array ═══

      {
        text: 'What is the force that pulls objects towards the Earth?',
        options: ['Friction', 'Gravity', 'Magnetism', 'Pressure'],
        correct: 1,
        explanation: 'Gravity is the force that pulls all objects towards the centre of the Earth.'
      },
      {
        text: 'Friction is a force that:',
        options: ['Speeds up objects', 'Slows down moving objects', 'Lifts objects', 'Has no effect'],
        correct: 1,
        explanation: 'Friction opposes motion — it slows down or stops moving objects.'
      },
      {
        text: 'Which simple machine is a ramp?',
        options: ['Lever', 'Pulley', 'Inclined plane', 'Wheel and axle'],
        correct: 2,
        explanation: 'A ramp is an inclined plane — it makes it easier to move heavy objects up.'
      },
      {
        text: 'A magnet attracts:',
        options: ['Wood', 'Plastic', 'Iron', 'Glass'],
        correct: 2,
        explanation: 'Magnets attract iron, steel, nickel, and cobalt. They do not attract wood, plastic, or glass.'
      },
      {
        text: 'Which of these reduces friction?',
        options: ['Sand on road', 'Oil on machine parts', 'Rough surface', 'Brakes'],
        correct: 1,
        explanation: 'Oil (lubricant) reduces friction between machine parts, making them move smoothly.'
      },
      {
        text: 'A see-saw is an example of:',
        options: ['Pulley', 'Lever', 'Inclined plane', 'Screw'],
        correct: 1,
        explanation: 'A see-saw is a lever — it has a fulcrum (pivot point) in the middle.'
      },
      {
        text: 'What happens when you push a ball on a rough surface?',
        options: ['It speeds up', 'It slows down and stops', 'It floats', 'It goes faster'],
        correct: 1,
        explanation: 'Rough surfaces have more friction, which slows down and eventually stops the ball.'
      },
      {
        text: 'Which force keeps us on the ground?',
        options: ['Magnetic force', 'Frictional force', 'Gravitational force', 'Muscular force'],
        correct: 2,
        explanation: 'Gravitational force (gravity) keeps us and everything else on the ground.'
      },
      {
        text: 'A bottle opener is an example of:',
        options: ['Lever', 'Pulley', 'Wedge', 'Screw'],
        correct: 0,
        explanation: 'A bottle opener is a lever — it uses a pivot point to lift the cap with less effort.'
      },
      {
        text: 'Which of these is a non-contact force?',
        options: ['Pushing a door', 'Pulling a rope', 'Magnetic force', 'Kicking a ball'],
        correct: 2,
        explanation: 'Magnetic force works without touching — a magnet can attract iron from a distance.'
      },
      {
        text: 'Wheels reduce friction because they:',
        options: ['Are heavy', 'Roll instead of slide', 'Are made of rubber', 'Are round and colourful'],
        correct: 1,
        explanation: 'Rolling friction is much less than sliding friction, so wheels make movement easier.'
      },
      {
        text: 'What type of force do you use when you lift a bag?',
        options: ['Gravitational force', 'Frictional force', 'Muscular force', 'Magnetic force'],
        correct: 2,
        explanation: 'Muscular force is the force applied by our muscles to lift, push, or pull objects.'
      },
      {
        text: 'A pulley is used to:',
        options: ['Cut things', 'Lift heavy objects easily', 'Measure weight', 'Store water'],
        correct: 1,
        explanation: 'A pulley helps lift heavy objects by changing the direction of force applied.'
      },
      {
        text: 'Which surface has the least friction?',
        options: ['Sandpaper', 'Carpet', 'Ice', 'Concrete'],
        correct: 2,
        explanation: 'Ice is very smooth and has very little friction, which is why we slip on it.'
      },
      {
        text: 'An object at rest will remain at rest unless:',
        options: ['It is heavy', 'A force acts on it', 'It is light', 'It is round'],
        correct: 1,
        explanation: 'This is Newton\'s first law — an object stays at rest until a force makes it move.'
      },
      {
        text: 'Which of these uses a wedge?',
        options: ['Scissors', 'Flagpole', 'Bicycle', 'Clock'],
        correct: 0,
        explanation: 'Scissors have wedge-shaped blades that cut by pushing material apart.'
      }
    ],

    'Light & Shadow': [
      {
        text: 'What is needed to form a shadow?',
        options: ['Only an object', 'A light source and an opaque object', 'Only a light source', 'Water and light'],
        correct: 1,
        explanation: 'A shadow is formed when an opaque object blocks a light source, creating a dark area behind it.'
      },
      {
        text: 'Which of these objects allows light to pass through completely?',
        options: ['Wood', 'Stone', 'Clear glass', 'Metal'],
        correct: 2,
        explanation: 'Clear glass is transparent — it allows light to pass through completely.'
      },
      {
        text: 'When is your shadow the shortest?',
        options: ['Early morning', 'At noon', 'In the evening', 'At night'],
        correct: 1,
        explanation: 'At noon, the sun is directly overhead, so shadows are the shortest.'
      },
      {
        text: 'What are the seven colours of the rainbow?',
        options: [
          'Red, Orange, Yellow, Green, Blue, Indigo, Violet',
          'Red, Pink, Yellow, Green, Blue, Purple, White',
          'Red, Orange, Yellow, Green, Blue, Purple, Black',
          'Red, Orange, Green, Blue, Indigo, Violet, White'
        ],
        correct: 0,
        explanation: 'The seven colours of the rainbow are Red, Orange, Yellow, Green, Blue, Indigo, and Violet (ROYGBIV).'
      },
      {
        text: 'Light travels in which path?',
        options: ['Curved lines', 'Zigzag lines', 'Straight lines', 'Circular paths'],
        correct: 2,
        explanation: 'Light always travels in straight lines. This is why shadows have sharp edges.'
      },
// ═══ LIGHT & SHADOW — Add after last question in 'Light & Shadow' array ═══

      {
        text: 'Light travels in:',
        options: ['Curved lines', 'Straight lines', 'Zigzag lines', 'Circular paths'],
        correct: 1,
        explanation: 'Light always travels in straight lines. This is called rectilinear propagation.'
      },
      {
        text: 'A shadow is formed when:',
        options: ['Light passes through an object', 'An object blocks light', 'Light bends', 'It is very bright'],
        correct: 1,
        explanation: 'A shadow forms when an opaque object blocks the path of light.'
      },
      {
        text: 'Which of these is a natural source of light?',
        options: ['Torch', 'Bulb', 'Sun', 'Candle'],
        correct: 2,
        explanation: 'The Sun is a natural source of light. Torch, bulb, and candle are man-made sources.'
      },
      {
        text: 'When light bounces off a surface, it is called:',
        options: ['Refraction', 'Reflection', 'Absorption', 'Diffraction'],
        correct: 1,
        explanation: 'Reflection is when light bounces back from a surface (like a mirror).'
      },
      {
        text: 'Which object forms a shadow?',
        options: ['Clear glass', 'Transparent plastic', 'Book', 'Clean water'],
        correct: 2,
        explanation: 'A book is opaque — it blocks light completely and forms a dark shadow.'
      },
      {
        text: 'At what time of day is your shadow the shortest?',
        options: ['Morning', 'Noon', 'Evening', 'Night'],
        correct: 1,
        explanation: 'At noon, the sun is directly overhead, so shadows are shortest.'
      },
      {
        text: 'A mirror works because of:',
        options: ['Refraction', 'Reflection', 'Absorption', 'Transmission'],
        correct: 1,
        explanation: 'Mirrors reflect light — the smooth shiny surface bounces light back to show our image.'
      },
      {
        text: 'Which colour of light has all seven colours combined?',
        options: ['Red', 'Blue', 'White', 'Black'],
        correct: 2,
        explanation: 'White light is made up of seven colours (VIBGYOR) combined together.'
      },
      {
        text: 'A rainbow has how many colours?',
        options: ['5', '6', '7', '8'],
        correct: 2,
        explanation: 'A rainbow has 7 colours: Violet, Indigo, Blue, Green, Yellow, Orange, Red (VIBGYOR).'
      },
      {
        text: 'Translucent objects:',
        options: ['Block all light', 'Allow all light to pass', 'Allow some light to pass', 'Produce their own light'],
        correct: 2,
        explanation: 'Translucent objects (like frosted glass) allow some light to pass but you cannot see clearly through them.'
      },
      {
        text: 'Why can we not see in complete darkness?',
        options: ['Our eyes are closed', 'There is no light to reflect off objects', 'The room is too big', 'We need glasses'],
        correct: 1,
        explanation: 'We see objects when light reflects off them into our eyes. No light = cannot see.'
      },
      {
        text: 'Which of these is luminous (produces its own light)?',
        options: ['Moon', 'Mirror', 'Star', 'Diamond'],
        correct: 2,
        explanation: 'Stars produce their own light (luminous). Moon only reflects sunlight.'
      },
      {
        text: 'The shadow of an object is always:',
        options: ['Colourful', 'Black or dark', 'White', 'Same colour as object'],
        correct: 1,
        explanation: 'Shadows are always dark/black because they are areas where light is blocked.'
      },
      {
        text: 'What happens when light passes through a prism?',
        options: ['It disappears', 'It splits into 7 colours', 'It becomes brighter', 'It turns black'],
        correct: 1,
        explanation: 'A prism splits white light into 7 colours (spectrum) — this is called dispersion.'
      },
      {
        text: 'Which of these materials will NOT form a shadow?',
        options: ['Cardboard', 'Stone', 'Clear glass', 'Your hand'],
        correct: 2,
        explanation: 'Clear glass is transparent — light passes through it, so it does not form a shadow.'
      },
      {
        text: 'The size of a shadow depends on:',
        options: ['Colour of the object', 'Distance between object and light source', 'Weight of the object', 'Time of year'],
        correct: 1,
        explanation: 'Shadow size changes with distance — closer to light = bigger shadow, farther = smaller shadow.'
      }
    ]

  }, // end Science

  // ─────────────────────────────────────────────
  // ENGLISH  (7 topics)
  // ─────────────────────────────────────────────
  English: {

    'Nouns & Pronouns': [
      {
        text: 'Which word is a proper noun?',
        options: ['city', 'river', 'Delhi', 'mountain'],
        correct: 2,
        explanation: 'Delhi is a proper noun because it is the name of a specific city. Proper nouns always start with a capital letter.'
      },
      {
        text: 'Which word is a pronoun?',
        options: ['book', 'she', 'run', 'happy'],
        correct: 1,
        explanation: '"She" is a pronoun. Pronouns replace nouns in a sentence (e.g., "She is my friend" instead of "Priya is my friend").'
      },
      {
        text: 'What is the plural of "child"?',
        options: ['childs', 'childes', 'children', 'childer'],
        correct: 2,
        explanation: 'The plural of "child" is "children". It is an irregular plural form.'
      },
      {
        text: 'Which sentence uses a collective noun?',
        options: [
          'The dog is barking.',
          'A flock of birds flew over.',
          'She is reading a book.',
          'He runs fast.'
        ],
        correct: 1,
        explanation: '"Flock" is a collective noun. It refers to a group of birds together.'
      },
      {
        text: 'Replace the underlined noun with a pronoun: "Rahul is my best friend."',
        options: ['She', 'They', 'He', 'It'],
        correct: 2,
        explanation: 'Rahul is a boy, so we replace his name with the pronoun "He".'
      },
// ═══ NOUNS & PRONOUNS — Add after last question in 'Nouns & Pronouns' array ═══

      {
        text: 'Which of these is a proper noun?',
        options: ['city', 'river', 'Mumbai', 'country'],
        correct: 2,
        explanation: 'Mumbai is a proper noun — it names a specific city. Proper nouns always start with a capital letter.'
      },
      {
        text: 'Choose the correct pronoun: "Riya lost ___ book."',
        options: ['she', 'her', 'hers', 'herself'],
        correct: 1,
        explanation: '"Her" is a possessive pronoun used before a noun to show ownership.'
      },
      {
        text: 'Which word is a collective noun?',
        options: ['Dog', 'Flock', 'Running', 'Beautiful'],
        correct: 1,
        explanation: 'Flock is a collective noun — it refers to a group of birds together.'
      },
      {
        text: '"The children played in the park." Which is the noun?',
        options: ['played', 'in', 'children', 'the'],
        correct: 2,
        explanation: 'Children is a noun — it names a group of people.'
      },
      {
        text: 'Which pronoun replaces "Ram and Shyam"?',
        options: ['He', 'She', 'They', 'It'],
        correct: 2,
        explanation: '"They" replaces two or more people (Ram and Shyam).'
      },
      {
        text: 'Which is an abstract noun?',
        options: ['Table', 'Happiness', 'Dog', 'River'],
        correct: 1,
        explanation: 'Happiness is an abstract noun — it cannot be seen or touched, only felt.'
      },
      {
        text: '"I saw ___ at the market." Choose the correct pronoun.',
        options: ['he', 'him', 'his', 'himself'],
        correct: 1,
        explanation: '"Him" is an object pronoun used after a verb.'
      },
      {
        text: 'The plural of "child" is:',
        options: ['Childs', 'Childrens', 'Children', 'Childes'],
        correct: 2,
        explanation: 'Child → Children is an irregular plural (does not follow the usual -s rule).'
      },
      {
        text: 'Which is a material noun?',
        options: ['Team', 'Gold', 'Honesty', 'Delhi'],
        correct: 1,
        explanation: 'Gold is a material noun — it refers to a substance/material from which things are made.'
      },
      {
        text: '"The cat cleaned ___." Choose the reflexive pronoun.',
        options: ['it', 'its', 'itself', 'it\'s'],
        correct: 2,
        explanation: '"Itself" is a reflexive pronoun — the cat did the action to itself.'
      },
      {
        text: 'The plural of "tooth" is:',
        options: ['Tooths', 'Toothes', 'Teeth', 'Teeths'],
        correct: 2,
        explanation: 'Tooth → Teeth is an irregular plural.'
      },
      {
        text: 'Which sentence has a common noun?',
        options: ['Taj Mahal is beautiful.', 'India is great.', 'The dog barked loudly.', 'Ganges flows east.'],
        correct: 2,
        explanation: '"Dog" is a common noun — it does not name a specific dog.'
      },
      {
        text: '"Neither Ria ___ Priya came." Fill in the blank.',
        options: ['or', 'nor', 'and', 'but'],
        correct: 1,
        explanation: '"Neither...nor" is the correct pair of correlative conjunctions.'
      },
      {
        text: 'The gender of "lioness" is:',
        options: ['Masculine', 'Feminine', 'Common', 'Neuter'],
        correct: 1,
        explanation: 'Lioness is feminine gender. Lion is masculine.'
      },
      {
        text: 'Which is a countable noun?',
        options: ['Water', 'Milk', 'Apple', 'Sugar'],
        correct: 2,
        explanation: 'Apple is countable — you can say one apple, two apples. Water, milk, sugar are uncountable.'
      },
      {
        text: '"This is the boy ___ won the race." Choose the relative pronoun.',
        options: ['which', 'who', 'whom', 'whose'],
        correct: 1,
        explanation: '"Who" is used as a relative pronoun for people (subject).'
      }
    ],

    'Verbs & Tenses': [
      {
        text: 'Which word is a verb in the sentence: "The cat sleeps on the mat."?',
        options: ['cat', 'sleeps', 'mat', 'the'],
        correct: 1,
        explanation: '"Sleeps" is the verb. It tells us what the cat is doing.'
      },
      {
        text: 'Which sentence is in the past tense?',
        options: [
          'She plays in the garden.',
          'She will play in the garden.',
          'She played in the garden.',
          'She is playing in the garden.'
        ],
        correct: 2,
        explanation: '"She played in the garden" is in the past tense. The verb "played" shows an action that already happened.'
      },
      {
        text: 'What is the past tense of "go"?',
        options: ['goed', 'gone', 'went', 'goes'],
        correct: 2,
        explanation: 'The past tense of "go" is "went". It is an irregular verb.'
      },
      {
        text: 'Which sentence is in the future tense?',
        options: [
          'I eat breakfast every day.',
          'I ate breakfast this morning.',
          'I will eat breakfast tomorrow.',
          'I am eating breakfast now.'
        ],
        correct: 2,
        explanation: '"I will eat breakfast tomorrow" is in the future tense. "Will" shows that the action has not happened yet.'
      },
      {
        text: 'Fill in the blank: "She ___ to school every day."',
        options: ['go', 'goes', 'went', 'going'],
        correct: 1,
        explanation: 'With "she" (third person singular), we add "s" to the verb. So "goes" is correct.'
      },
// ═══ VERBS & TENSES — Add after last question in 'Verbs & Tenses' array ═══

      {
        text: 'Which sentence is in simple past tense?',
        options: ['I am eating.', 'I eat daily.', 'I ate an apple.', 'I will eat later.'],
        correct: 2,
        explanation: '"Ate" is the past tense of "eat." The action is already completed.'
      },
      {
        text: '"She ___ to school every day." Choose the correct verb.',
        options: ['go', 'goes', 'going', 'went'],
        correct: 1,
        explanation: '"Goes" is correct because "she" is third person singular and it\'s a daily habit (simple present).'
      },
      {
        text: 'Which is a helping verb?',
        options: ['Run', 'Jump', 'Is', 'Eat'],
        correct: 2,
        explanation: '"Is" is a helping (auxiliary) verb — it helps the main verb (e.g., "She is running").'
      },
      {
        text: '"They ___ playing cricket now." Fill in the blank.',
        options: ['is', 'are', 'was', 'were'],
        correct: 1,
        explanation: '"Are" is used with "they" in present continuous tense.'
      },
      {
        text: 'The past tense of "swim" is:',
        options: ['Swimmed', 'Swam', 'Swum', 'Swimming'],
        correct: 1,
        explanation: 'Swim → Swam (past tense). It is an irregular verb.'
      },
      {
        text: '"I ___ finish my homework by evening." Choose the correct word.',
        options: ['will', 'was', 'am', 'did'],
        correct: 0,
        explanation: '"Will" is used for future tense — the action will happen later.'
      },
      {
        text: 'Which sentence is in present continuous tense?',
        options: ['She sings well.', 'She is singing now.', 'She sang yesterday.', 'She will sing tomorrow.'],
        correct: 1,
        explanation: '"Is singing" = present continuous (is/am/are + verb-ing). Action happening right now.'
      },
      {
        text: 'The past tense of "bring" is:',
        options: ['Bringed', 'Brought', 'Brung', 'Bringing'],
        correct: 1,
        explanation: 'Bring → Brought is an irregular verb.'
      },
      {
        text: '"The birds ___ in the sky." Choose the correct verb.',
        options: ['fly', 'flies', 'flying', 'flied'],
        correct: 0,
        explanation: '"Fly" is correct because "birds" is plural (simple present tense).'
      },
      {
        text: 'Which word is a verb in: "The cat sat on the mat"?',
        options: ['cat', 'sat', 'on', 'mat'],
        correct: 1,
        explanation: '"Sat" is the verb (action word) — it tells what the cat did.'
      },
      {
        text: '"He ___ not come to school yesterday." Fill in the blank.',
        options: ['do', 'does', 'did', 'is'],
        correct: 2,
        explanation: '"Did" is used for past tense negative sentences.'
      },
      {
        text: 'The past tense of "teach" is:',
        options: ['Teached', 'Taught', 'Teaching', 'Teaches'],
        correct: 1,
        explanation: 'Teach → Taught is an irregular verb.'
      },
      {
        text: '"We ___ going to the zoo tomorrow." Choose correctly.',
        options: ['is', 'am', 'are', 'was'],
        correct: 2,
        explanation: '"Are" is used with "we" for future plans (present continuous for future).'
      },
      {
        text: 'Which is an irregular verb?',
        options: ['Walk', 'Talk', 'Go', 'Play'],
        correct: 2,
        explanation: 'Go → Went → Gone (irregular). Walk → Walked, Talk → Talked, Play → Played (regular).'
      },
      {
        text: '"She has ___ her lunch." Choose the correct form.',
        options: ['eat', 'ate', 'eaten', 'eating'],
        correct: 2,
        explanation: '"Has eaten" is present perfect tense (has/have + past participle).'
      },
      {
        text: 'The past tense of "catch" is:',
        options: ['Catched', 'Caught', 'Catching', 'Catches'],
        correct: 1,
        explanation: 'Catch → Caught is an irregular verb.'
      }
    ],

    'Adjectives & Adverbs': [
      {
        text: 'Which word is an adjective in: "The big elephant walked slowly."?',
        options: ['elephant', 'walked', 'big', 'slowly'],
        correct: 2,
        explanation: '"Big" is an adjective. It describes the noun "elephant".'
      },
      {
        text: 'Which word is an adverb in: "The big elephant walked slowly."?',
        options: ['elephant', 'walked', 'big', 'slowly'],
        correct: 3,
        explanation: '"Slowly" is an adverb. It describes how the elephant walked.'
      },
      {
        text: 'What is the comparative form of "tall"?',
        options: ['tallest', 'taller', 'more tall', 'most tall'],
        correct: 1,
        explanation: 'The comparative form of "tall" is "taller". We use it to compare two things.'
      },
      {
        text: 'Which sentence uses an adjective correctly?',
        options: [
          'She runs quick.',
          'The red rose smells sweet.',
          'He speaks loud.',
          'They play happy.'
        ],
        correct: 1,
        explanation: '"Red" is an adjective describing the noun "rose". The sentence is grammatically correct.'
      },
      {
        text: 'What is the superlative form of "good"?',
        options: ['gooder', 'better', 'goodest', 'best'],
        correct: 3,
        explanation: '"Best" is the superlative form of "good". It is an irregular adjective (good → better → best).'
      },
// ═══ ADJECTIVES & ADVERBS — Add after last question in 'Adjectives & Adverbs' array ═══

      {
        text: 'Which word is an adjective in: "The tall boy ran fast"?',
        options: ['The', 'tall', 'ran', 'fast'],
        correct: 1,
        explanation: '"Tall" is an adjective — it describes the noun "boy."'
      },
      {
        text: 'Which is an adverb in: "She sings beautifully"?',
        options: ['She', 'sings', 'beautifully', 'None'],
        correct: 2,
        explanation: '"Beautifully" is an adverb — it describes how she sings (modifies the verb).'
      },
      {
        text: '"This is the ___ building in the city." (superlative)',
        options: ['tall', 'taller', 'tallest', 'most tall'],
        correct: 2,
        explanation: '"Tallest" is the superlative form — comparing more than two things.'
      },
      {
        text: 'Choose the comparative form of "good":',
        options: ['Gooder', 'More good', 'Better', 'Best'],
        correct: 2,
        explanation: 'Good → Better → Best (irregular comparison).'
      },
      {
        text: '"The tortoise walks ___." Choose the correct adverb.',
        options: ['slow', 'slowly', 'slower', 'slowest'],
        correct: 1,
        explanation: '"Slowly" is an adverb (describes how the tortoise walks). "Slow" is an adjective.'
      },
      {
        text: 'Which sentence has an adjective of quantity?',
        options: ['She has blue eyes.', 'I ate some rice.', 'The big dog barked.', 'He is a brave boy.'],
        correct: 1,
        explanation: '"Some" is an adjective of quantity — it tells how much rice.'
      },
      {
        text: '"My bag is ___ than yours." (comparative)',
        options: ['heavy', 'heavier', 'heaviest', 'more heavy'],
        correct: 1,
        explanation: '"Heavier" is the comparative form (comparing two bags).'
      },
      {
        text: 'Which word is an adverb of time?',
        options: ['Quickly', 'Here', 'Yesterday', 'Loudly'],
        correct: 2,
        explanation: '"Yesterday" tells when (time). "Quickly/Loudly" tell how (manner). "Here" tells where (place).'
      },
      {
        text: '"She is ___ intelligent ___ her sister." Fill in the blanks.',
        options: ['more...than', 'most...than', 'as...as', 'more...as'],
        correct: 0,
        explanation: '"More...than" is used for comparative degree with longer adjectives.'
      },
      {
        text: 'The superlative of "bad" is:',
        options: ['Badder', 'Baddest', 'Worst', 'More bad'],
        correct: 2,
        explanation: 'Bad → Worse → Worst (irregular comparison).'
      },
      {
        text: '"He always comes late." Which word is the adverb of frequency?',
        options: ['He', 'always', 'comes', 'late'],
        correct: 1,
        explanation: '"Always" is an adverb of frequency — it tells how often.'
      },
      {
        text: 'Which is a demonstrative adjective?',
        options: ['Beautiful', 'This', 'Many', 'Tall'],
        correct: 1,
        explanation: '"This" is a demonstrative adjective when used before a noun (e.g., "this book").'
      },
      {
        text: '"The ___ girl won the prize." Choose the correct order of adjectives.',
        options: ['intelligent young', 'young intelligent', 'intelligent and young', 'young and intelligent'],
        correct: 0,
        explanation: 'Opinion adjectives (intelligent) come before age adjectives (young).'
      },
      {
        text: '"She spoke very ___." Choose the adverb.',
        options: ['soft', 'softly', 'softer', 'softest'],
        correct: 1,
        explanation: '"Softly" is an adverb describing how she spoke.'
      },
      {
        text: 'Which sentence uses "enough" correctly?',
        options: ['She is enough tall.', 'She is tall enough.', 'She enough is tall.', 'Enough she is tall.'],
        correct: 1,
        explanation: '"Enough" comes after an adjective: "tall enough" (not "enough tall").'
      },
      {
        text: 'The comparative of "little" (amount) is:',
        options: ['Littler', 'More little', 'Less', 'Least'],
        correct: 2,
        explanation: 'Little → Less → Least (irregular comparison for amount).'
      }
    ],

    'Prepositions': [
      {
        text: 'Choose the correct preposition: "The book is ___ the table."',
        options: ['on', 'in', 'at', 'by'],
        correct: 0,
        explanation: '"On" is used when something is resting on a surface. The book is on the table.'
      },
      {
        text: 'Choose the correct preposition: "She lives ___ Mumbai."',
        options: ['on', 'in', 'at', 'by'],
        correct: 1,
        explanation: '"In" is used with cities and countries. She lives in Mumbai.'
      },
      {
        text: 'Choose the correct preposition: "The cat is hiding ___ the bed."',
        options: ['on', 'above', 'under', 'over'],
        correct: 2,
        explanation: '"Under" means below something. The cat is hiding under the bed.'
      },
      {
        text: 'Choose the correct preposition: "We will meet ___ 5 o\'clock."',
        options: ['in', 'on', 'at', 'by'],
        correct: 2,
        explanation: '"At" is used with specific times. We will meet at 5 o\'clock.'
      },
      {
        text: 'Choose the correct preposition: "The bird flew ___ the tree."',
        options: ['under', 'below', 'over', 'in'],
        correct: 2,
        explanation: '"Over" means above and across. The bird flew over the tree.'
      },
// ═══ PREPOSITIONS — Add after last question in 'Prepositions' array ═══

      {
        text: '"The cat is ___ the table." (underneath)',
        options: ['on', 'under', 'above', 'beside'],
        correct: 1,
        explanation: '"Under" means below/beneath something.'
      },
      {
        text: '"She has been waiting ___ 3 o\'clock."',
        options: ['for', 'since', 'from', 'at'],
        correct: 1,
        explanation: '"Since" is used with a specific point in time (3 o\'clock). "For" is used with duration.'
      },
      {
        text: '"The bird flew ___ the tree."',
        options: ['over', 'under', 'in', 'at'],
        correct: 0,
        explanation: '"Over" means above and across — the bird flew above the tree.'
      },
      {
        text: '"I go to school ___ bus."',
        options: ['by', 'in', 'on', 'with'],
        correct: 0,
        explanation: '"By" is used with means of transport (by bus, by train, by car).'
      },
      {
        text: '"The match is ___ Monday."',
        options: ['in', 'on', 'at', 'by'],
        correct: 1,
        explanation: '"On" is used with days of the week (on Monday, on Friday).'
      },
      {
        text: '"She divided the cake ___ four children."',
        options: ['between', 'among', 'with', 'for'],
        correct: 1,
        explanation: '"Among" is used for more than two. "Between" is for exactly two.'
      },
      {
        text: '"He jumped ___ the river."',
        options: ['in', 'into', 'on', 'onto'],
        correct: 1,
        explanation: '"Into" shows movement from outside to inside (he was outside, then jumped in).'
      },
      {
        text: '"The shop is ___ the bank and the school."',
        options: ['among', 'between', 'beside', 'behind'],
        correct: 1,
        explanation: '"Between" is used when something is in the middle of exactly two things.'
      },
      {
        text: '"We have a holiday ___ Diwali."',
        options: ['in', 'on', 'at', 'during'],
        correct: 1,
        explanation: '"On" is used with specific days and festivals (on Diwali, on Christmas).'
      },
      {
        text: '"The picture is ___ the wall."',
        options: ['in', 'on', 'at', 'by'],
        correct: 1,
        explanation: '"On" is used when something is attached to a surface (on the wall, on the table).'
      },
      {
        text: '"She is afraid ___ spiders."',
        options: ['from', 'of', 'with', 'by'],
        correct: 1,
        explanation: '"Afraid of" is the correct preposition combination.'
      },
      {
        text: '"He has been ill ___ two days."',
        options: ['since', 'for', 'from', 'in'],
        correct: 1,
        explanation: '"For" is used with a duration of time (for two days, for a week).'
      },
      {
        text: '"The dog ran ___ the road."',
        options: ['across', 'through', 'over', 'between'],
        correct: 0,
        explanation: '"Across" means from one side to the other of a flat surface.'
      },
      {
        text: '"She is good ___ mathematics."',
        options: ['in', 'at', 'on', 'with'],
        correct: 1,
        explanation: '"Good at" is the correct preposition combination for skills/subjects.'
      },
      {
        text: '"The train arrives ___ 9 AM."',
        options: ['in', 'on', 'at', 'by'],
        correct: 2,
        explanation: '"At" is used with specific times (at 9 AM, at noon, at midnight).'
      },
      {
        text: '"We walked ___ the tunnel."',
        options: ['across', 'through', 'over', 'along'],
        correct: 1,
        explanation: '"Through" means going in one end and out the other (enclosed space).'
      }
    ],

    'Comprehension': [
      {
        text: 'Read: "Meera loves to read books. She visits the library every Saturday." What does Meera do every Saturday?',
        options: ['She plays cricket.', 'She visits the library.', 'She watches TV.', 'She goes to school.'],
        correct: 1,
        explanation: 'The passage says "She visits the library every Saturday."'
      },
      {
        text: 'Read: "The sun rises in the east and sets in the west." Where does the sun set?',
        options: ['North', 'South', 'East', 'West'],
        correct: 3,
        explanation: 'The passage clearly states "the sun sets in the west".'
      },
      {
        text: 'Read: "Raju has three pets: a dog, a cat, and a parrot." How many pets does Raju have?',
        options: ['Two', 'Three', 'Four', 'Five'],
        correct: 1,
        explanation: 'The passage says Raju has three pets: a dog, a cat, and a parrot.'
      },
      {
        text: 'Read: "It was a cold winter morning. Priya wore a warm coat and gloves." Why did Priya wear a coat?',
        options: ['It was raining.', 'It was hot.', 'It was cold.', 'She was going to a party.'],
        correct: 2,
        explanation: 'The passage says it was a cold winter morning, so Priya wore a warm coat.'
      },
      {
        text: 'Read: "The farmer woke up early and went to his field. He watered the plants and removed the weeds." What did the farmer do first?',
        options: ['Removed weeds', 'Watered plants', 'Woke up early', 'Went to market'],
        correct: 2,
        explanation: 'The passage says the farmer "woke up early" first, then went to his field.'
      },
// ═══ COMPREHENSION — Add after last question in 'Comprehension' array ═══

      {
        text: 'Read: "The fox tried to reach the grapes but could not. He said the grapes are sour." What is the moral?',
        options: ['Foxes eat grapes', 'We should try harder', 'People criticise what they cannot have', 'Grapes are always sour'],
        correct: 2,
        explanation: 'The moral of "The Fox and the Grapes" is that people often pretend to dislike what they cannot get.'
      },
      {
        text: 'Read: "Ants work hard all summer storing food. The grasshopper plays all day." What will happen to the grasshopper in winter?',
        options: ['He will have plenty of food', 'He will have no food', 'He will sleep', 'He will find food easily'],
        correct: 1,
        explanation: 'Since the grasshopper did not store food in summer, he will have nothing to eat in winter.'
      },
      {
        text: 'Read: "The sun and wind had a contest to see who could make a man remove his coat. The wind blew hard but the man held his coat tighter." Why did the wind fail?',
        options: ['The wind was weak', 'Force made the man hold tighter', 'The coat was glued', 'It was too cold'],
        correct: 1,
        explanation: 'The harder the wind blew, the tighter the man held his coat. Force does not always work.'
      },
      {
        text: 'Read: "Akbar asked Birbal to find the most foolish person in the kingdom." This tells us Akbar wanted to:',
        options: ['Punish someone', 'Test Birbal\'s cleverness', 'Find a new minister', 'Go on a journey'],
        correct: 1,
        explanation: 'Akbar often gave Birbal challenging tasks to test his wit and intelligence.'
      },
      {
        text: 'Read: "The crow was thirsty. He found a pot with very little water at the bottom." What did the crow most likely do?',
        options: ['Broke the pot', 'Flew away', 'Dropped pebbles to raise water level', 'Asked for help'],
        correct: 2,
        explanation: 'In the famous story, the clever crow dropped pebbles into the pot to raise the water level.'
      },
      {
        text: 'Read: "Rahul woke up late. He skipped breakfast and ran to catch the bus." We can infer that Rahul:',
        options: ['Does not like breakfast', 'Was in a hurry for school', 'Wanted to exercise', 'Was not hungry'],
        correct: 1,
        explanation: 'Waking up late + skipping breakfast + running for bus = he was rushing to school.'
      },
      {
        text: 'Read: "The old man planted a tree. He knew he would never eat its fruit." Why did he plant it?',
        options: ['He was confused', 'For future generations', 'He did not like fruit', 'Someone forced him'],
        correct: 1,
        explanation: 'The old man planted the tree selflessly — for others to enjoy in the future.'
      },
      {
        text: 'Read: "Meera practices piano for 2 hours every day. She won the school music competition." What can we conclude?',
        options: ['She is lucky', 'Hard work leads to success', 'Piano is easy', 'The competition was simple'],
        correct: 1,
        explanation: 'Regular practice (2 hours daily) led to her winning — hard work brings success.'
      },
      {
        text: 'What does "to let the cat out of the bag" mean?',
        options: ['To free a cat', 'To reveal a secret', 'To buy a bag', 'To catch a cat'],
        correct: 1,
        explanation: '"Let the cat out of the bag" is an idiom meaning to reveal a secret accidentally.'
      },
      {
        text: 'Read: "The shepherd boy cried wolf twice as a joke. The third time a real wolf came but nobody helped." The lesson is:',
        options: ['Wolves are dangerous', 'Boys should not be shepherds', 'Nobody believes a liar even when they tell the truth', 'Always run from wolves'],
        correct: 2,
        explanation: 'The moral: if you lie repeatedly, people won\'t believe you even when you tell the truth.'
      },
      {
        text: 'Read: "Dark clouds gathered. The wind blew strongly. People hurried home." What is about to happen?',
        options: ['A festival', 'Rain or storm', 'Sunrise', 'An earthquake'],
        correct: 1,
        explanation: 'Dark clouds + strong wind + people hurrying home = a storm or heavy rain is coming.'
      },
      {
        text: 'Read: "The lion spared the mouse. Later, the mouse freed the lion from a net." This shows:',
        options: ['Lions are weak', 'Mice are stronger than lions', 'Even small creatures can help the mighty', 'Nets are dangerous'],
        correct: 2,
        explanation: 'The moral of "The Lion and the Mouse" — even the smallest can help the greatest.'
      },
      {
        text: 'What is the main idea of a passage about "saving water"?',
        options: ['Water is blue', 'We should waste water', 'Water conservation is important', 'Rivers are long'],
        correct: 2,
        explanation: 'A passage about saving water would focus on why water conservation matters.'
      },
      {
        text: 'Read: "Grandma always said, \'A stitch in time saves nine.\'" This means:',
        options: ['Sewing is important', 'Fix problems early before they get bigger', 'Nine is a lucky number', 'Time flies fast'],
        correct: 1,
        explanation: 'This proverb means solving a small problem now prevents it from becoming a big one later.'
      },
      {
        text: 'Read: "The dog wagged its tail and jumped when it saw its owner." The dog was feeling:',
        options: ['Angry', 'Scared', 'Happy and excited', 'Tired'],
        correct: 2,
        explanation: 'Wagging tail + jumping = signs of a happy and excited dog.'
      },
      {
        text: 'What does "burning the midnight oil" mean?',
        options: ['Setting fire', 'Wasting oil', 'Studying or working late at night', 'Cooking at night'],
        correct: 2,
        explanation: '"Burning the midnight oil" means working or studying very late into the night.'
      }
    ],

    'Spelling': [
      {
        text: 'Which of these is the correct spelling of the word that means a close companion?',
        options: ['freind', 'frend', 'friend', 'freand'],
        correct: 2,
        explanation: 'The correct spelling is "friend". Remember: "i before e except after c".'
      },
      {
        text: 'Which of these is the correct spelling of the word that means very pretty?',
        options: ['beutiful', 'beautiful', 'beautifull', 'beutifull'],
        correct: 1,
        explanation: 'The correct spelling is "beautiful". It has the word "beauty" inside it.'
      },
      {
        text: 'Which of these is the correct spelling of the word that means to get something?',
        options: ['recieve', 'recive', 'receive', 'receve'],
        correct: 2,
        explanation: 'The correct spelling is "receive". After "c", the rule is "e before i".'
      },
      {
        text: 'Which of these is the correct spelling of the word that means the day after today?',
        options: ['tomorro', 'tomorow', 'tomorrow', 'tommorrow'],
        correct: 2,
        explanation: 'The correct spelling is "tomorrow". It has one "m" and two "r"s.'
      },
      {
        text: 'Which of these is the correct spelling of the word that gives a reason?',
        options: ['becuase', 'because', 'becouse', 'becaus'],
        correct: 1,
        explanation: 'The correct spelling is "because". You can remember it as "Big Elephants Can Always Understand Small Elephants".'
      },
// ═══ SPELLING — Add after last question in 'Spelling' array ═══

      {
        text: 'Which spelling is correct?',
        options: ['Beautifull', 'Beutiful', 'Beautiful', 'Beautful'],
        correct: 2,
        explanation: 'B-E-A-U-T-I-F-U-L is the correct spelling.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Tommorow', 'Tomorrow', 'Tomorow', 'Tommorrow'],
        correct: 1,
        explanation: 'T-O-M-O-R-R-O-W — one M, two Rs.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Necesary', 'Necessary', 'Neccessary', 'Necessery'],
        correct: 1,
        explanation: 'N-E-C-E-S-S-A-R-Y — one C, two Ss.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Recieve', 'Receive', 'Receve', 'Receeve'],
        correct: 1,
        explanation: 'R-E-C-E-I-V-E — remember "i before e except after c."'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Definately', 'Definetly', 'Definitely', 'Deffinitely'],
        correct: 2,
        explanation: 'D-E-F-I-N-I-T-E-L-Y — comes from "definite" + ly.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Seperate', 'Separate', 'Separete', 'Seprate'],
        correct: 1,
        explanation: 'S-E-P-A-R-A-T-E — remember "there is A RAT in separate."'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Occassion', 'Occasion', 'Ocassion', 'Occation'],
        correct: 1,
        explanation: 'O-C-C-A-S-I-O-N — two Cs, one S.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Enviroment', 'Environment', 'Envirnoment', 'Environmant'],
        correct: 1,
        explanation: 'E-N-V-I-R-O-N-M-E-N-T — don\'t forget the N before M.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Knowlege', 'Knowledge', 'Knowledg', 'Knowladge'],
        correct: 1,
        explanation: 'K-N-O-W-L-E-D-G-E — silent K at the start.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Dissapear', 'Disappear', 'Disapear', 'Disappere'],
        correct: 1,
        explanation: 'D-I-S-A-P-P-E-A-R — one S, two Ps.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Goverment', 'Government', 'Govermnent', 'Governmant'],
        correct: 1,
        explanation: 'G-O-V-E-R-N-M-E-N-T — don\'t forget the N before M.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Febuary', 'February', 'Feburary', 'Febrary'],
        correct: 1,
        explanation: 'F-E-B-R-U-A-R-Y — don\'t forget the first R.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Wierd', 'Weird', 'Wired', 'Weired'],
        correct: 1,
        explanation: 'W-E-I-R-D — this is an exception to the "i before e" rule.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Accomodate', 'Accommodate', 'Acomodate', 'Acommodate'],
        correct: 1,
        explanation: 'A-C-C-O-M-M-O-D-A-T-E — two Cs and two Ms.'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Rythm', 'Rhythm', 'Rythym', 'Rhythem'],
        correct: 1,
        explanation: 'R-H-Y-T-H-M — no vowels in this word!'
      },
      {
        text: 'Which spelling is correct?',
        options: ['Vaccum', 'Vacuum', 'Vacum', 'Vaccuum'],
        correct: 1,
        explanation: 'V-A-C-U-U-M — one C, two Us.'
      }
    ],

    'Vocabulary': [
      {
        text: 'What is the meaning of the word "enormous"?',
        options: ['Very small', 'Very fast', 'Very large', 'Very quiet'],
        correct: 2,
        explanation: '"Enormous" means very large or huge. For example: "The elephant is enormous."'
      },
      {
        text: 'Which word is the opposite (antonym) of "happy"?',
        options: ['Joyful', 'Glad', 'Sad', 'Cheerful'],
        correct: 2,
        explanation: '"Sad" is the antonym (opposite) of "happy".'
      },
      {
        text: 'Which word is a synonym (similar meaning) for "brave"?',
        options: ['Cowardly', 'Fearful', 'Courageous', 'Timid'],
        correct: 2,
        explanation: '"Courageous" is a synonym for "brave". Both words mean not afraid to face danger.'
      },
      {
        text: 'What does the word "transparent" mean?',
        options: ['Cannot be seen through', 'Can be seen through clearly', 'Very heavy', 'Very colourful'],
        correct: 1,
        explanation: '"Transparent" means you can see through it clearly. For example, clear glass is transparent.'
      },
      {
        text: 'Which word means "to move very quickly"?',
        options: ['Crawl', 'Stroll', 'Dash', 'Trudge'],
        correct: 2,
        explanation: '"Dash" means to move very quickly. For example: "She dashed to catch the bus."'
      },
// ═══ VOCABULARY — Add after last question in 'Vocabulary' array ═══

      {
        text: 'What is the synonym of "happy"?',
        options: ['Sad', 'Joyful', 'Angry', 'Tired'],
        correct: 1,
        explanation: 'Joyful means the same as happy (synonym = same meaning).'
      },
      {
        text: 'What is the antonym of "brave"?',
        options: ['Bold', 'Cowardly', 'Strong', 'Fierce'],
        correct: 1,
        explanation: 'Cowardly is the opposite of brave (antonym = opposite meaning).'
      },
      {
        text: '"A person who writes books" is called a/an:',
        options: ['Teacher', 'Author', 'Editor', 'Librarian'],
        correct: 1,
        explanation: 'An author is a person who writes books.'
      },
      {
        text: 'The synonym of "enormous" is:',
        options: ['Tiny', 'Huge', 'Normal', 'Thin'],
        correct: 1,
        explanation: 'Enormous and huge both mean very large in size.'
      },
      {
        text: 'The antonym of "ancient" is:',
        options: ['Old', 'Historic', 'Modern', 'Antique'],
        correct: 2,
        explanation: 'Modern is the opposite of ancient (old vs new).'
      },
      {
        text: '"A place where books are kept" is called a:',
        options: ['Museum', 'Library', 'Laboratory', 'Gallery'],
        correct: 1,
        explanation: 'A library is a place where books are kept and can be borrowed.'
      },
      {
        text: 'What does "generous" mean?',
        options: ['Selfish', 'Willing to give and share', 'Angry', 'Lazy'],
        correct: 1,
        explanation: 'Generous means willing to give more than expected; kind and sharing.'
      },
      {
        text: 'The antonym of "victory" is:',
        options: ['Win', 'Success', 'Defeat', 'Trophy'],
        correct: 2,
        explanation: 'Defeat is the opposite of victory (losing vs winning).'
      },
      {
        text: '"One who cannot see" is called:',
        options: ['Deaf', 'Blind', 'Mute', 'Lame'],
        correct: 1,
        explanation: 'Blind means unable to see. Deaf = cannot hear. Mute = cannot speak.'
      },
      {
        text: 'The synonym of "intelligent" is:',
        options: ['Foolish', 'Clever', 'Slow', 'Weak'],
        correct: 1,
        explanation: 'Clever and intelligent both mean having good mental ability.'
      },
      {
        text: 'What does "fragile" mean?',
        options: ['Strong', 'Easily broken', 'Heavy', 'Colourful'],
        correct: 1,
        explanation: 'Fragile means delicate and easily broken (like glass).'
      },
      {
        text: '"A group of sheep" is called a:',
        options: ['Pack', 'Herd', 'Flock', 'Swarm'],
        correct: 2,
        explanation: 'A flock of sheep. Pack = wolves. Herd = cattle. Swarm = bees.'
      },
      {
        text: 'The antonym of "temporary" is:',
        options: ['Short', 'Brief', 'Permanent', 'Quick'],
        correct: 2,
        explanation: 'Permanent (lasting forever) is the opposite of temporary (lasting for a short time).'
      },
      {
        text: 'What does "cautious" mean?',
        options: ['Careless', 'Careful and alert', 'Fast', 'Brave'],
        correct: 1,
        explanation: 'Cautious means being careful to avoid danger or mistakes.'
      },
      {
        text: '"The study of stars and planets" is called:',
        options: ['Biology', 'Geography', 'Astronomy', 'Geology'],
        correct: 2,
        explanation: 'Astronomy is the study of stars, planets, and space.'
      },
      {
        text: 'The synonym of "rapid" is:',
        options: ['Slow', 'Quick', 'Steady', 'Calm'],
        correct: 1,
        explanation: 'Rapid and quick both mean happening in a short time; fast.'
      }
    ]

  } // end English

}; // end QUESTION_BANK
