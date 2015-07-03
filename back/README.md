-----------------------------------------------------------------------------------------------
# **POWER EVENT DOCS** #
-----------------------------------------------------------------------------------------------


-----------------------------------------------------------------------------------------------
## **1- ENTIDADES** ##
-----------------------------------------------------------------------------------------------

### **1.1- ENTIDADES PRINCIPAIS (Relacionadas ao evento)** ###

**events** - todos os eventos que a empresa possui (ex: Feira do Agronegocio, Feira do Automovel, etc)

**event-versions** - as versoes de um evento (ex: XII Feira do Agronegocio 2014, XIII Feira do Agronegocio 2015, etc) 

**places** - lugares (ex: Anhembi, Hotel Hilton, etc)

**spots** - ambientes de um evento (ex: anfiteatro, stand 1, stand 2, sala de cafe, etc)

**activities** - atividades de evento (ex: palestra 1, palestra 2). É executada em spots.

**checkin items** - lista de itens de infra estrutura necessários para uma atividade. 

**requests** - solicitacoes de novos itens de infra-estrutura para uma atividade.
 
**incidents** - incidentes que ocorrem em uma atividade.


### **1.2- ENTIDADES SECUNDARIAS (Dominios)** ###

**cities** 

**countries**

**event-types**

**infra-items**

**offices**

**roles**

**team-members**



-----------------------------------------------------------------------------------------------
## **2- INTERAÇÕES COM BASE DE DADOS** (CRUD (Read e Write) e Aggregations operations)
-----------------------------------------------------------------------------------------------

### **2.1- COCKPIT** ###

**Q1** - ***READ***- lista de eventos, com possibilidade de filtro por nome e data do evento, mostrando os seguintes campos:

- name

- office 

- team 

- array de places + dates 

-**Q2** - ***AGGREGATION***- calculo da regra que determina a cor do semaforo para a infra do evento, que mostra a situacao da infra de cada evento, atraves da seguinte regra de negocio: 

*verifica os semaforos de todas as atividades (de todos os spots e de todos os lugares do evento) e mostra o semaforo de maior valor dentre eles (vermelho, laranja e amarelo, nessa sequencia)*
     

**Q3**- ***AGGREGATION***- calculo da qtde eventos em aberto (eventos que estao acontecendo ou ainda nao aconteceram)

**Q4**- ***AGGREGATION***- calculo da qtde eventos acontecendo 

**Q5**- ***AGGREGATION***- calculo da qtde eventos 'out of target' - eventos q possuem pelo menos 1 atividade com semaforo  amarelo, laranja ou vermelho


---------------------------------------------------------------------------------------------

### **2.2- DETALHE DO EVENTO**###

**Q6**- ***CRUD***- para os campos da versao do evento:

- evento (select com a lista de eventos da empresa)

- nome da versao do evento

- office (select com a lista de offices da empresa)


**Q7** - ***AGGREGATION***- calculo da cor do semaforo de infra do evento: mostra a situacao da infra do evento, atraves da seguinte regra de negocio: 

*verifica os semaforos de todas as atividades (de todos os spots e de todos os lugares do evento) e mostra o semaforo de maior valor dentre eles (vermelho, laranja e amarelo, nessa sequencia)*


---------------------------------------------------------------------------------------------

### **2.3- TAB GENERAL INFO** ###

**Q8**- ***CRUD***- da associacao do evento com places (selecionado em um select com os places) + data inicio + data fim

**Q9**- ***CRUD***- do time (arrays de integrantes do time e seus papeis)

---------------------------------------------------------------------------------------------

### **2.4- LISTA DE SPOTS** ###

**Q8**- ***READ***- lista de spots, agrupados por lugares, mostrando: 

- nome do spot

- data de inicio da primeira atividade 

- data fim da ultima atividade

- capacidade do spot 

**Q9**- ***AGGREGATION***- calculo da cor do semaforo do spot: mostra a situacao da infra do spot, atraves da seguinte regra de negocio: 

*verifica os semaforos de todas as atividades do spot e mostra o semaforo de maior valor dentre eles (vermelho, laranja e amarelo, nessa sequencia)*


---------------------------------------------------------------------------------------------

### **2.5- DETALHES DO SPOT** ###

**Q10**- ***CRUD***- para o spot: 

- place (select com os places do sistema)

- name do spot

- capacity

- dimension

**Q11** - ***UPDATE***- do stage do spot (select com enums 'on planning' e 'ready') 

---------------------------------------------------------------------------------------------

### **2.6- ATIVIDADES** ###

**Q12**- ***CRUD***- de atividades do spot

- nome da atividade

- data hora inicio

- data hora fim

- membro do time que vai ser o Techicnal 

**Q13**- ***CRUD***- itens infra da atividade

- item de infra

- qtde

- checked

- teamMember que fez o checkin

- data e hora do checkin 


**Q14**- ***READ***- itens de infra que estao associados com o tipo da atividade (para sugestão para o usuario na hora de escolher os itens de infra do spot) 


-----------------------------------------------------------------------------------------------

### **2.7- REQUIRES ** ###

**Q13**- ***CRUD***- para solicitacoes de itens de infra-estrutura para activities ou spots

-----------------------------------------------------------------------------------------------

### **2.8- INCIDENTS ** ###

**Q13**- ***CRUD***- para incidents em activities