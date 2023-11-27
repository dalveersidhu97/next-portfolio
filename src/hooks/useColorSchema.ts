import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useCookies } from 'next-client-cookies';

type ThemeType = 'dark' | 'light' | 'auto';

export function useColorScheme() {
    const cookies = useCookies();
    const systemPrefersDark = useMediaQuery(
        {
            query: "(prefers-color-scheme: dark)",
        },
        undefined
    );
    
    const [colorScheme, setTheme] = useState(cookies.get('theme') as ThemeType);
    const setColorScheme = (theme: ThemeType) => {
        cookies.set('theme', theme, { path: '/', expires: new Date(2147483647 * 1000) });
        setTheme(theme);
    };
    const isDark = colorScheme === 'auto' ? !!systemPrefersDark : colorScheme === 'dark';

    useEffect(() => {
        if (isDark) {
            if (!document.body.classList.contains('dark'))
                document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [isDark]);

    return {
        colorScheme,
        setColorScheme,
        isDark
    };
}