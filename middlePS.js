function solution(s){
    let answer;
    let i=0;
    i = parseInt(s.length/2);
    if(s.length%2 == 0){
        answer = s[i-1]+s[i];
    }
    else{
        answer = s[i];
    }

    return answer;

}
console.log(solution("thing"));