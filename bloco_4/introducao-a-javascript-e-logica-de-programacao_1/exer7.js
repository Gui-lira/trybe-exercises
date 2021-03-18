function nota(porcentagem) 
    {if (porcentagem > 100 || porcentagem <= 0)
        {return 'erro'}
    else if (porcentagem >= 90)
        {return 'A'}
    else if (porcentagem >= 70)
        {return 'C'}
    else if (porcentagem >= 60)
        {return 'D'}
    else if (porcentagem <= 50)
        {return 'F'}};
    
let notao = nota(100)
        console.log(notao)