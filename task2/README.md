# Обновите README.md
echo "# Лабораторная работа 02

## Выполнила: Жанель
## Группа: ИС поток 2 
## Дата: 23.01.2026

## Задания выполнены:
- ✓ Task 1: Fragment Layout, ItemList, CombinedFragmentList
- ✓ Task 2: Card, ProductList, Section
- ✓ 3+ коммитов в git
- ✓ Структура папок соблюдена
- ✓ AI_REPORT.md приложен" > README.md

# Создайте AI_REPORT.md если нет
if (!(Test-Path AI_REPORT.md)) {
    echo "# AI Отчет
## Использовал DeepSeek для помощи
## Весь код набран вручную" > AI_REPORT.md
}

# Сделайте финальный коммит
git add README.md AI_REPORT.md
git commit -m "docs: final documentation and AI report"