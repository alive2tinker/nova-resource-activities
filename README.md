# Nova Resource Activities
this package is a resource tool that lists activities performed on the resource in the detailed view of the resource. It utilizes [Spatie/activity-log](https://spatie.be/docs/laravel-activitylog/v3/introduction) package. 

usage
-----
After successful installation of the Spatie package, simply require this package by writing the following command
`composer require alive2tinker/resource-activities`

then add the resource tool to your nova models like the following:

```
public function fields(Request $request)
    {
        return [
            //your fields

                ResourceActivities::make(),
        ];
    }
```

and you are good to go.

QUICK NOTE:
if you run into npm problem, just cd into `vendor/alive2tinker/resource-activities` and run `npm i && npm run production` until I solution is found

LICENSE
----
MIT
