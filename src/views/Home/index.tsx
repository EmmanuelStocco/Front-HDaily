// index.tsx
import React from 'react';
import {
    HomeContainer,
    WeekGrid,
    DayColumn,
    DayHeader,
    TaskItem,
    TaskTitle,
    TaskDescription,
    DisabledTaskItem // Mantenha o estilo para itens desabilitados
} from './style';

export const data = [
    { id: 1, dsc_titulo: 'Lavar pratos', dsc_descricao: 'Manter casa organizada lavando pratos', tipo: 'diario' },
    { id: 2, dsc_titulo: 'Arrumar a cama', dsc_descricao: 'Organizar o quarto ao acordar', tipo: 'diario' },
    { id: 3, dsc_titulo: 'Fazer compras', dsc_descricao: 'Comprar alimentos e produtos essenciais', tipo: 'semanal' },
    { id: 4, dsc_titulo: 'Exercitar-se', dsc_descricao: 'Praticar atividades físicas por 30 minutos', tipo: 'diario' },
    { id: 5, dsc_titulo: 'Limpar o banheiro', dsc_descricao: 'Higienizar o banheiro para evitar sujeira', tipo: 'semanal' },
    { id: 6, dsc_titulo: 'Estudar programação', dsc_descricao: 'Aprimorar habilidades com exercícios e projetos', tipo: 'diario' },
    { id: 7, dsc_titulo: 'Pagar contas', dsc_descricao: 'Realizar pagamentos de contas mensais', tipo: 'mensal' },
    { id: 8, dsc_titulo: 'Reunião de feedback', dsc_descricao: 'Discutir progresso e feedback mensalmente', tipo: 'mensal' },
];

const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

export default function Home() {
    const dailyTasks = data.filter((task) => task.tipo === 'diario');

    // Obter a data atual
    const today = new Date();
    const currentDay = today.getDay() === 0 ? 6 : today.getDay() - 1; // Ajuste para o índice do dia (0 é domingo)

    return (
        <HomeContainer>
            <h1>Tier List Semanal de Tarefas</h1>

            <WeekGrid>
                {daysOfWeek.map((day, index) => (
                    <DayColumn key={day}>
                        <DayHeader>{day}</DayHeader>
                        {dailyTasks.map((task) => {
                            const isDisabled = index !== currentDay; // Bloqueia dias que não são o dia atual
                            return (
                                <TaskItem key={task.id}>
                                    {isDisabled ? (
                                        <DisabledTaskItem>
                                            <TaskTitle>{task.dsc_titulo}</TaskTitle>
                                            <TaskDescription>{task.dsc_descricao}</TaskDescription>
                                        </DisabledTaskItem>
                                    ) : (
                                        <TaskItem>
                                            <TaskTitle>{task.dsc_titulo}</TaskTitle>
                                            <TaskDescription>{task.dsc_descricao}</TaskDescription>
                                        </TaskItem>
                                    )}
                                </TaskItem>
                            );
                        })}
                    </DayColumn>
                ))}
            </WeekGrid>

            <h2>Tarefas Semanais</h2>
            <WeekGrid>
                {data.filter((task) => task.tipo === 'semanal').map((task) => (
                    <TaskItem key={task.id}>
                        <TaskTitle>{task.dsc_titulo}</TaskTitle>
                        <TaskDescription>{task.dsc_descricao}</TaskDescription>
                    </TaskItem>
                ))}
            </WeekGrid>

            <h2>Tarefas Mensais</h2>
            <WeekGrid>
                {data.filter((task) => task.tipo === 'mensal').map((task) => (
                    <TaskItem key={task.id}>
                        <TaskTitle>{task.dsc_titulo}</TaskTitle>
                        <TaskDescription>{task.dsc_descricao}</TaskDescription>
                    </TaskItem>
                ))}
            </WeekGrid>
        </HomeContainer>
    );
}
