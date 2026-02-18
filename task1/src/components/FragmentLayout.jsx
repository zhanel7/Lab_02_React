import React from 'react';
function FragmentLayout() {
    return (
        <>
        <header>
            <h1>Fragment Layout</h1>
            </header>
            <main>
                <p>Этот макет использует React Fragments для избежания лишних обёрток.Проверьте DOM-между header,main и footer нет дополнительных div</p>
                </main>
                <footer>
                    <p>ⓒ 2026 Моя лабораторная работа</p>
                    </footer>
                </>
    );
}

export default FragmentLayout;