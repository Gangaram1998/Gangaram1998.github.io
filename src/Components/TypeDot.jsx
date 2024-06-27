import { Box, Text } from '@chakra-ui/react';
import Typewriter from 'typewriter-effect';
export function TypeText() {
    return (
        <Box h='30px' color='#fb982f' fontSize={{ base: 'md', lg: '2xl' }}>
            <Typewriter
                options={{
                    strings: ['Full Stack Web Developer....',
                        'Creative....',
                        "Problem Solver....",
                        "Quick Learner....",
                        "Adaptable....",
                        "React JS Developer....",
                        "MERN Stack Developer...."    
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 70,
                }}
            />
        </Box>
    )
}
export function TypeDot() {
    return (
        <Text fontSize={{ base: 'sm', md: '2xl', lg: '3xl' }} ml='5px'>
            <Typewriter
                options={{
                    strings: ['. . .', '. .', '. . . . .'],
                    autoStart: true,
                    loop: true,
                    cursor: " ."
                }}

            />
        </Text>

    )
}