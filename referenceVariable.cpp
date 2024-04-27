#include<iostream>
using namespace std;
int main(){
    int variable = 50;
    cout<<variable<<endl;
    int newVariable = variable;
    cout<<"value of new variable by referencing variable"<<newVariable<<endl;
    newVariable = 10;
    cout<<"changed the value of newVariable to = " <<newVariable<<endl;
    cout<<"the value of original variable = " <<variable<<endl;
    

return 0;
}