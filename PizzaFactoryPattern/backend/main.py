from abc import ABC, abstractclassmethod
import random
data_file = open('../frontend/public/data.txt', 'a')

#Interface
class IPizza(ABC):
    def __init__(self, nome):
        self.nome = nome

    @abstractclassmethod
    def preparar(self):
        pass

    @abstractclassmethod
    def assar(self):
        pass

    @abstractclassmethod
    def empacotar(self):
        pass
################

#Models
class PizzaQueijo(IPizza):

    def preparar(self, ):
        print('\n=======================')
        print('Cliente', self.nome)
        print('Preparando Pizza')

    def assar(self):
        print('Assando pizza de queijo')

    def empacotar(self):
        print('empacotando pizza de queijo')

class PizzaCalabresa(IPizza):

    def preparar(self,):
        print('\n=======================')
        print('Cliente', self.nome)
        print('Preparando Pizza')

    def assar(self):
        print('Assando pizza de calabresa')

    def empacotar(self):
        print('empacotando pizza de calabresa')

class Pizza4Queijos(IPizza):

    def preparar(self):
        print('\n=======================')
        print('Cliente', self.nome)
        print('Preparando Pizza')

    def assar(self):
        print('Assando pizza de 4 queijos')

    def empacotar(self):
        print('empacotando pizza de 4 queijos')

class PizzaBrasileira(IPizza):

    def preparar(self):
        print('\n=======================')
        print('Cliente', self.nome)
        print('Preparando Pizza')

    def assar(self):
        print('Assando uma brasileira')

    def empacotar(self):
        print('empacotando uma brasileira')

class PizzaPortuguesa(IPizza):

    def preparar(self):
        print('\n=======================')
        print('Cliente', self.nome)
        print('Preparando Pizza')

    def assar(self):
        print('Assando portuguesa')

    def empacotar(self):
        print('empacotando portuguesa')

################

#Factorys
class PizzaQueijoFactory(PizzaQueijo):
    def criar(self):
        self.preparar()
        self.assar()
        self.empacotar()

class PizzaCalabresaFactory(PizzaCalabresa):
    def criar(self):
        self.preparar()
        self.assar()
        self.empacotar()

class Pizza4QueijosFactory(Pizza4Queijos):
    def criar(self):
        self.preparar()
        self.assar()
        self.empacotar()
        
class PizzaBrasileiraFactory(PizzaBrasileira):
    def criar(self):
        self.preparar()
        self.assar()
        self.empacotar()

class PizzaPortuguesaFactory(PizzaPortuguesa):
    def criar(self):
        self.preparar()
        self.assar()
        self.empacotar()
#####################

#Loja/Api
class Store():

    def __init__(self,nome):
        self.nome = nome
        self.pizza=[]

    def criar(self, *tipos):
        if tipos is not None:
            data_file.write(f'ID: {random.randrange(0,10000)}/')
            data_file.write(f'Cliente: {self.nome}/')
            self.pizzas(*tipos)

    def pizzas(self,*tipos):
        for tipo in tipos:
            if tipo == 'Queijo':
                self.pizza.append('Queijo')
                PizzaQueijoFactory(self.nome).criar()
            elif tipo == "Calabresa":
                self.pizza.append('Calabresa')
                PizzaCalabresaFactory(self.nome).criar()
            elif tipo == '4 Queijos':
                self.pizza.append('4 Queijos')
                Pizza4QueijosFactory(self.nome).criar()
            elif tipo == 'Brasileira':
                self.pizza.append('Brasileira')
                PizzaBrasileiraFactory(self.nome).criar()
            elif tipo == 'Portuguesa':
                self.pizza.append('Portuguesa')
                PizzaPortuguesaFactory(self.nome).criar()
            else:
                print('\nNão fabricamos esta pizza')
                pass
        self.enviar_pizzas_database()
        
    def enviar_pizzas_database(self):
        data_file.write('Pizzas: ')
        for p in self.pizza:
            data_file.write(p + ', ')
        data_file.write('\n')
    


Store('Pedro').criar('Queijo')
Store('Hellyson').criar('Queijo','4 Queijos','Portuguesa')

Store('Fulano').criar('Queijo','Calabresa','Portuguesa','Brasileira')

Store('Sicrano').criar('Calabresa')
Store('Beltrano').criar('4 Queijos','Calabresa','Calabresa')

Store('Cabral').criar('Portuguesa','Americana','Queijo','Calabresa')
Store('Joaozinho').criar('Queijo','4 Queijos','Queijo')

