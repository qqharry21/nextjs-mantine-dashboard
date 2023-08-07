import {Button, Center, createStyles, Group, rem, Stack, Text, Title} from '@mantine/core';
import Head from "next/head";
import React from "react";

const useStyles = createStyles((theme) => ({
    root: {
        paddingTop: rem(80),
        paddingBottom: rem(80),
    },

    label: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(220),
        lineHeight: 1,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2],

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(120),
        },
    },

    title: {
        textAlign: 'center',
        fontWeight: 900,
        fontSize: rem(38),

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(32),
        },
    },

    description: {
        maxWidth: rem(500),
        margin: 'auto',
    },
}));

function Error500() {
    const {classes} = useStyles();

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
        <Center sx={{height: '100vh', width: '100vw'}}>
            <Stack>
                <div className={classes.label}>404</div>
                <Title className={classes.title}>Sorry, unexpected error..</Title>
                <Text color="dimmed" size="lg" align="center" className={classes.description}>
                    Our servers could not handle your request. Don't worry, our development team was already notified.
                    Try refreshing the page.
                </Text>
                <Group position="center">
                    <Button size="md">
                        Take me back to home page
                    </Button>
                </Group>
            </Stack>
        </Center>
        </>
    );
}

export default Error500
