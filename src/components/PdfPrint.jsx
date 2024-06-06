import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const PdfPrint = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'emp-data',
    });

    return (
        <>
            <div ref={componentRef} style={styles.container}>
                <div style={styles.content}>
                    <h1 style={styles.title}>Todo meu amor é pouco!</h1>
                    <p style={styles.paragraph}>
                        Meu amor, minha vida, razão do meu viver. Sempre tive muita dificuldade de me expressar, mas por algum motivo sinto que você merece isso, até porque você merece o mundo e mais um pouquinho!
                        Todo meu amor é pouco para retribuir todo o amor que você merece, você é o melhor presente que eu podia ter, pequeno e completo e com sua chatice que completa seu charme.
                    </p>
                    <p style={styles.paragraph}>
                        Amo você, Doll
                    </p>
                </div>
            </div>
            <div style={styles.buttonContainer}>
                <button style={styles.button} onClick={handlePrint}>Guardar de recordação!</button>
            </div>
        </>
    );
};

const styles = {
    container: {
        width: '100%',
        padding: '20px',
        backgroundColor: '#fff0f5', // fundo rosa claro
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        fontFamily: "'Times New Roman', serif",
    },
    content: {
        textAlign: 'justify',
        margin: '20px',
        color: '#4b0082', // cor do texto em índigo
    },
    title: {
        margin: '20px 10px',
        textAlign: 'center',
        fontSize: '2em',
        color: '#ff1493', // rosa escuro para o título
    },
    paragraph: {
        margin: '20px 10px',
        lineHeight: '1.6',
        color: '#000000', // texto em preto para melhor legibilidade
    },
    buttonContainer: {
        marginTop: '10%',
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: '#ff69b4', // rosa para o botão
        color: '#fff',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '1em',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
};

export default PdfPrint;
