function checkTriplet(arr)
{
    for(let i=0;i<arr.length;i++)
    {
        for(let j=i+1;j<arr.length;i++)
        {
            for(let k=j+1;k<arr.length;j++)
            {
                if(arr[i]+arr[j]+arr[k]==0)
                {
                    console.log(arr[i],arr[j],arr[k]);

                }
            }
        }
    }
}
arr= [1,-2,1,0,5];
checkTriplet(arr);
