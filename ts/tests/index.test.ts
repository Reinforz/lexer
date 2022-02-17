import { generateTokensFromText } from "../index"

it(`Generate lexeme record`, () => {
  expect(generateTokensFromText(`int a=1;\n
int b=2;

a+=1;
a++;
a=a+1;

b-=1;
b--;
b=b-1;

a/=1;
a/b;

a*=1;
a*b;

a%=1;
a%b;

a=1;
a==b;

a<<2
a<=2
a<2

b>>2
b>=2
b>2

!a
a!=b

a&&b
a&b

a||b
a|b

~a
^a

int a = 1;
float b = 2;
if (a == 2) {
  char[] c = {10, 22, 22.5};
} else {
  char[] d = "Hello \"World";
}

bool d= true;
bool e =false;

char str[] = {'A', 'B'};
char str[] = "\"AB";`)).toStrictEqual({
  
})
})