// data/dishes.ts
import { Dish } from "@/modules/menu/types";

const dishes: Dish[] = [
  {
    id: "1",
    name: "Espresso",
    slug: "espresso",
    description: "Cà phê espresso nguyên chất hương vị đậm",
    price: 30000,
    image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExIVFRUVGBUVGBgYFxcXFRcYFRUWFhUVFxUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLSstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAEDBQYCBwj/xAA8EAABAwIEBAMFBgQHAQEAAAABAAIDBBEFEiExBkFRYSJxgQcTMpGhFEJSscHwI3LR4RUzQ2KCkqIkFv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACURAAICAgICAgIDAQAAAAAAAAABAhEDIRIxBEETUSIyQmFxFP/aAAwDAQACEQMRAD8A8SslYrWxcLv6Iyi4MfI7IC0GxIvsSPu35FE5qMXJ9DUW3SM7gHD0tUXhhADGlxJ8wAB3JKK4g4VkpXFpOZt3Brts2U2JtfTVbbgSnih9+HvyZjG3XX4HZnD6JuOaQzVDIg7Ztyf53ucfo5q4VnzPzHir8Ur6/pHV8Mfj5ezyssKbIVt8V4eihYDnuehVQzDmkXC71JM55wcXsoMhSyFXUmH2UDqdUQVeQqxpYnZLgKSDD3SGzG3WjocAmLLEZVjkyRj2zfFgnk/VEmDe0aqhYI7hzW6DNv8AMI88ZNn/AMyJvdAR8It3cSVnsXpHQvsNlz3iyOkdUsWbDHk+jYmTDpRYsDXKvdT0zDeMg2WRikufESncRqWkqvi+mZLMu6RsavHSG5Q0NHUK94IpRPmkJJt1Xl7ZndSvVfZJUZo5W8wpnjqJccvKRiuJJj9pcCbFp0V2ytbUU/u3WLgNCs/xfF/9cgHVPg12OHRacE4oy502d0uGBp1GyKc1rdmoPGKtzXXGl1XDEXdVXESkkW0j/wDahzf8KjiqnHmp2ucimHJAcsLr7KWBjgjQ4qaN3ZaKTMpJMHc02VNiES00j22VRXRaKk7IaozTxqmIU07LFRJiGITELpJAHISunKZACunTJAIAV0krJIA+g4YGnopDSt36arPTYk5rtDoQLbGxvrpfU2RIxCoyXAZ93z1Gul+R0+alwNkzP1sM0M8gawuDnEjwkg3N7+eqIho5CC6Q/wAR+/YDYK9h988G9jryA0F3XFr6/d+ajna5ps4hp8h3218lpLKpa1ZcoyaMZXcNTPdcuJHmpYcLLBYrWMdIXAWFr6m3JHcQPpoYcxcL/UrGc1AmOFz3Zg3UovquqPAPfOs02Cs6Brqhpcxht1QrmzsJ93oQhz1omMN7WiKWk+xSC5B+qas40GrWNJPyR1NhMUrC6ol8evNZZ00MD3ADOFycYzdy2z0FlyYY1FpInZxHNI4NAyqwoMTpy8smbmPUrKS1Zc+7RlUsMZvc7rSWCLRnHzJ3t3/pfYr9lucoAWVq2tB8J0XVVfMUMVpjhxMc+bm9qhAFeheyzEDDI5riLOH1WBZJYImGuc1wcDa1lWRWqMYNJ2aPjeEMqXPvo43+aqY59la4vU/aIGkgEgeqzUMhGhCnH1TKy/toPxKXMAUFDlPJTSuBCHYNdlpxMrLuhpmkIySIBV9BIjKkGydBYJNLbmuG1PdVtWUGZShRDkjSsnB5rqaxaVnY5z1RUVWnQWgetZqgCFaVBugHsTJI0109ksqAGJTBPlT2QAkyTgkSgBrpJkkAehU9Sc2pVvROllOVr7D96fksNU41ytYhH0ONPYzM3UrOabXWzWCintmg4gr6ukFmuBCqcDxyqmlBfmd5DQKukxqWeQZwSOisqqvkp7OgYNtdFEMS7aVmmXKnKot0aKu4wEHgdEb2WSra11ZJYNcAo4MbfNKPfN37LbNlhpwHmIlpG4GyfBR3QvklL8U9FM3iWWij9y2O+lr+aGoxO9rpXvAv+qInxyGokLA3fbTVUWKYdVNJaL5eVkvjvofyuOm7BJawlxbcnurMYNEIzIX3PzTYHg7rEyMWvweppAwxe6Ln+SJ/h0GOsjpnmklSAdANEfSZpBdrbozG8IzvLmRlrVBE+WmacguFalyjohwUJ1IBmw+ZziAwlEU/D7t5PChm47OHZgbHyUlXjUjxqVm1k6N8csCTbts4xGijaPCVWkLp0hd1KHK1hFrs58kot6VFnh9ZbQ7J68X1bt2VbGVq+GOE6+rsYadxjP8AqP8ABHbqHH4h5XQ1W0Ty0ZkTWKOp5AV6hS+xYfFU1gZ1bG2//t39FaQcA4HB8b5JCPxzW+jLJ80KmeZUUYVm6G4XptPFgTNGwxHzzH8yrSn/AMJdoIYbfyhHMVM+fMTpSLqmkYV9NVeA4RL8UEfoS0/QqlqPZdhUmsbpYyekmYfJ4KXNBxZ4DFETsEdDhkhF7L1bEvZDMGk0tRG/oJGlp/7C4+ixGNcO4nS6S08ljpmYM7D6tvb1RyvorikUMVOToh6qGyv4+EMTtnNHMG7/AAjNb+W9/oq+tY1l2ua5rxu1wII9Cjkw4lTl7JrJSSa6LgvKsg7SSbqnIQBG4LkhSrkhAEdk67yhJAGilwZjjfRWeGYYxul7rNy4m57hZWlSyVobIwnbUIFSs0dPh7DsBdESUumwKzWA4jIX+IGy0VTWFrC4NJsi/sfHejk4Uy18ouq6sxas926PK0sHNJnE/vLRtZZ3dVOMPnDic4t0BUSd6Nopx2QYZE5komkYQwG5WmxjjaA2ETdt7qy4diFTTWcBoNbqvHDFM5x028kri3VhxnV1oJwPiunJHv22B07IXG8ZjieXUxacwRtLw1SucGPOVvyVDxRhEEb7UwL8u9tQobXKjSKlxsijr62YXEZyX1Nt1ZZQW+JtlX0/GssUXuWNA8xqFWx8RyA3Jv2TTa6QpKEluWy3/wAGEzrMbqVXcQcKz04u4Cx6LRUtbI6D3zbM8t1S4niNRMMskgtyvzULLJmjwRivsy8EhGgCssHwCepeGxRlznGw6X7nkFzHE1p6le6eyijDKITEayF2X+Vpy/UgrblrRzKO3YLwp7N6ShaJqrLPMNfF/lMP+1v3iOpTcS+0hsd2QAG2l+Q8ggPaZj72n3TTvvb6LBYfhDpzdx9FjkyKO2aY8UpOohGJcX1M5+Nx7DZBQ0tTKdGu8yt3g/DMTW3LVexQMboAPRccvKf8Udi8SK/ZnnlFwxVOtc2Wiwzh2Zu7itcx2g08tk5dZT82R+xvFjXSKSXBJLaOPzUDKOoj+F7r99loDO4BDur+oQ5T9MaUPaOsPxqeMgSNdbqtdh2LtkAvb9VlaWt/CbDobEfIoylMTiD/AJT+RF/dn+YbhVDNJOmRkwRatI1k8Nxdp3XjftJe6RzoZaRoIuWSEi5H4mOG47L1rDao3yu3G4vcEciDzCC4uwJlXA5hHiAJY7m13L0PNdsJJ7OGUWtHyrJHYkdFwQiKxpD3gixDnAjoQbFQFdBkMEk6ZACXC6KayAHsmSskgDW0mGxtNwFbxN0QsbkSxBJxOAGOygA23WRkxiYXZn06LZuiBVLiPD7D4r2ubIaXsqDfoz0cj3attcKbDHZ5QJDpfXVWNPSwwvLXhzj0CFkZG+XK1hbfa6nXRpT7NBJirmj+F/Ditbu49VnDjczH3zGwN7ciijgNUSGctgrabhpscY98Rfz1U8YrsrnKS0NFUT4i8NjaGZRqb2CkbiHuWGEtaXA2LhYlBB7qZpMJJa/S4VV78DxP337qJ3ZtjkqLSqpWOAcQ0O3Ntz5qtnpIWjMX63+EBHmqaAbm4y3vzv0VY85j4ST++aiPJ9s0m4JaRYM4kGURZLM2P9UNG5sgLS7wDYndHcPUDpbxGAyZjoGDxH15DuvRuHvZIw+KrIa06+6YbkDo6T+itUYScvbPIcNpjJMI25nXNvCC428gvo3grK2lEAuDDdhB0cLE7j1+qtMIwmkpG5aeBkY6gDMfN25XnXEWPSUOJSvAux5a8jsQNfO91XbMrpHHtCwpwnElrtc23qDr9EsKo2tbte9j3Wyo8TpMRiygi53adCD1aVUVWCywbDMwXsQNQO4XF5WOTdnoeLlhx4+yFkott+dvRSwSEn16qGIX32Xfu7Xtudja9ieZHNcfE6Qz3v76J2vVXPG/cHxgab5SdN230UsOe3isT229EwcUwx7uihkjBUjWk2UjYeqq2uiOIK2PkES2E2+KykLLcvRKGKWQ5Y2X89gpl+Wio6JeG3u9/kBJDRbsAei2VW8NaSTYAXv5KtwnDGUzS5zgXnVzjt/Zeb+03j4FjqalOYu8LnDvplb13Xd42Jwjs4PKyqc7ieTY/UNkqZ3t2dLIR5FxQBC97qfZHSzU8eW8czY2Bzm83BozFzTvqvMuJ/Z7WUl3ZPexj7zAbj+Zu4XcpI42ZCyay6SsmIYBJdJroA5ST3ToA18chRMUiBjciIwgkNbKs5jFfKx2W2Zu4v1V2AV06MHcAopDTroytJicrX5reJ3MqzEL87ZpSzLfWxFx6JY1UwgZLXd25KjlhlBtld5Ka2acm0bHG45HtbJA74ddCqWnMbw41Mz8w+6DzVxw/KRG1jxY8rqlxqgcJnPay7e2o+iJNDhdBOGVLS10LDe+rb8lSz0EpkyDxO7K94cxFrZCG0wcSNrajrutHSMikbIYBkkeLG7fhI5dQs3OjSOLl7MTVUErS2N7Q02uSCDotHwPgFVWn3bMsdOw+OW3/lvV30CFwHh+WumbG1+UEnORqWtafEf0C94oaSOmiZDC0NYwWA/MnqU1smTpnWEYZBSRiOFtrDVx+Jx6kol0xKHzEoiGNKhWdNZdec+1vDM2V4HiDbjuPvDzFr/NeoRsCz/H2G+8gDwNWH6FOL2Qz58pKySJ12OLT2W5wT2nTxgNmaJWjrv81msSwzxEjQ8wqp8JGhFlo4pkKVHsUHGuGz/G0xu68/8AsP1VkxtJIP4dS31IP9F4QWlO2Vw2JWMsEJejaOea6Z783Cj92RjvUp24NJ1Z6OC8Iixadu0jx6lEDiSqH+s//sVn/wAkTVeXI91bhLxzYP8Al/Zdf4cB8UrGjzuvBpOIqo7zP/7FDSYnM74pHH1KF4kRvypHvU1fh8I/iVDT2zfoFTYp7U6WFuWnYXelm/1K8TfM47lRk3WkcMY9IxlmlLs1XEXHlVVXBdlYfutuB69UvZ9g/wBorYS/Voe067OcDcBUWG0Ye8BxsD816lwLSNbUNcLNjhaT/wAiLN/M/JadGfZ6lJC9pvb1CIjLJRlcBdUE/FjIuYcOi5puNqN+zhHIOT9GnsHjT52UpDbM1x37L4Z7vitFMdQ4CzHn/c0fmvDsZwmamkMUzCx467EdWnmF9RYvxBEIM2dpcTYBpBuQbG1tx3WX4jwSHEoMrxZ41Y8DxMdy8x2VJ12FWfO10nI3FMNfTzOhkFnsNj+hHYoMhWScpJ7JIA08YRcYsgxKFI55ym2/JBJLWVJibexPJBuxN5F2sPrsqeXFX3s4A+ZJC5dWueLa+TdAlsuNIkFJLUP/AIcfivqQdL9SeSI/xCSE5JGh1tN9fmoaKWVoAF42O5qSubTnQZ78yXbnyU2Wl7OZMRdI7MA7w8geXRET4nVZLWe1m4FrfPqhsLglabwtLyb6gbAdeifE62o2kuP32Q0mNSYTQSytaZtDyNviHcoiTiosLnQ3a97crjYWv1t1VLQPmcSIwXX3AF9FzWU7m6uYWHoRoVPFWVzdaPZPYvh4ZSyVB1fM8i/PKw2/MuW8e66yfsqlBwyID7rpGnzzE/qtQmSEQhGxoSFFsKQmEMXcsQe0sOzhZRtKmYUiTyjiTh9zZHAN2vy5LI1WH9Qvf6+ibJYncaehWE4jwQNeQPPZaKVkuJ5TLh6Fkoz2WzqsNIKrpqNUSZZ1K7oozAVe1MYCBlCB2V/uSuXRolxUDigLIiyybRO8rhAyaGQgghbjCsVdkZGDa+/cndYyli5lE++PJSxWetYfw17wAvfe/dWX/wCYp2C+UEryXD+JaiL4Xm3S60mH8bvdo8qaZSaNUzB2A6BajDqTK1U2BVbJBmzArUwOFtEmy0eS+2vARliqmt8QIif3Dvgv66eq8oqaVrPieCejeXYle/8AtgIGGy9bx2884t+q+exY8iTzJ6+ScQpewyJ1PYXuD5JKuLR+F3zSVCNM1g5qRpGyjZJpqQkyVpOhB8jsqsyK2rwZgu7PYDqo/sTo2EtLHBw6+JWeIwF7HNaRm0O/RU1PEMt3vt0AISZcdkT6tziA7QDkOyMqZIXNaGtyu59+6GgnLCXN12uTbnsmkr8/xAfJKirCKfGZImGNhsNrjmuKd0krwCC5t9VZ4HE0xa2Oul7aK1YANgAnSJc30UuORGENMbso2sPzuFTCcuID3EgnXW628kTX6EXCEbhcQNwwJ0TbNZ7Lq0U73U73fw5jmYTs1/Q9ivSiw3svEx++3kt/wlxe2W0E7gJm6NcTYSDlfo781MkVCRs2GyKjehmm+h3C7aSFJbDWuUrHIRjlK1yVCCveLNcUYpEwASaX0Duh6Hsr12y8+4/GZpBTitkvoGr6pjhoQs7WPus0auWE2BLm/Uf1T/44Dudeh0K0Mw2oCAnC5krroWWqQMaQodxXL5kO+bugCZxXLXhQXJ8lLGEFFnM9umU30F9La21HouG3O2qEY+2+ytcFxZtPMyX3Qkym4DtBopZNHNbRSxG0kbmEi4zAi46oUFe08c4jR1OFtnfYSOaHRjQPzHcW5jdeKsjc45WC5KBtB2H4pKwjK9w16r0nhfHJTYPJ9Vj8DwxkZzP1cBe/Idh1KPxDGm0zC42Lzs39T2RSHFnftm4kD2R0rTfUSP7W+EfqvKASp6+sdM90jzdzje5QwKcVSKb2TjN2+aSQeUk6FZJDO86C5Kno5sjj7wWPI8lEZWtN2EKN8rpDl3JUlWFfax4jcFzjy6crLp2CybhzSD+qDNC5ts1gOt7q1Ne1jAGuJsOafRPY7MHjDLPcc19+SePh9u+e4VfJiRIsf31KtcLqS2MF+xJLfLp57oT+wa+iypKVsYs0afvVTDdQQ1rHC+o8wVNcH9O6ZDTOZqnICSLhA1GOsA8O/wBEZUx5mFp+8LLNnAZr2ADvIoZUWWzsVzQlwFiCG/3VDNVuz5w6x6jRWNLAyKN7ZXXzFoLRfTXf0VfiMUbXERuzN5HmfMcktFVR6Fwf7TXMAiqrvaNA/wC+31PxDsV6vhOLxVDc0UjZB2+IfzN3C+Wkdh2LTQuDo3uaRzBIPzQ4gpH1O1t9iu2O6rxbAvaxMyzZ2CQfiBySfPY+q3+E8fUU1h73ITykGX/1sVDQ9M2GZZXi2hzMJHRX8NWxwu1zT5EEfMFc1Aa4WKAqzwTEYSHFVM7AdwvT+KuGTq9mvZYCqoyCQRY9FoZVWikdAO48lx7ruUdJAQoXMKABRAO6cRgclNZMQgaOAE4CRK6jaToAT5C6TGIBSwDUeEk8h/bcq6w/AXWDnMJP+45Wj0Gp+YVmaeKIeORrezbD+59UgKeKglkN5HFo5Dd3oNmq6pKNrBoMo59T5lVtVxHDGLRtv3Og/qs5iOPSSnfTpsPknQGnxTiFkYsyxI+Q/qVi6+tdI7M4k+agc4ncrkhOgGIXceqjUjBqgAj7OfxJI1tZABb3V7cy43KSi2XSKl7CDZWE0TWMbbUk3OmtrfldBRsJubjTqufelWSG1NXmAFhouIJGMtdt9iuKeUAgkA2RElRG5wLmeG1rDTyIU0MjqpmvuQwX+Sjp6pwcLa2OgO1/JSw1ga3KGi557qJgLiS0agX7kc0UMPqm1BaCdAeh11VxQVDPdttf8I/FcabLNNxB4Fr3RVCx0jT4spB0J2IO4+aaFKmXrq1oeGHR3odehsoMZpJWn3okDQQAG312125KvdhjmguEmZ41AH1VbLNIdDmv6pSTfQRcUMZHF1tbk26q6p2uZGA2A3Bu51tTbseSFigc2LNls69yR8WXqO6hEhku60j7ak5j/SwQ0CYHVfEdLX9FFZWFNAJXhrne7A0uTchCVUQa4hpzC9r9U0waIwUmykbGyZPkHVMkPo8ZmiN2Pc3+Vxb+S0dD7SK2O38UuA5OAd9d1iykEqQ7PUKb2syW/iQxO+bVJLx5Qzf5tEPNr15YmKOI2z052MYO7/Qnb5Pv+qhkqcHPKo+i821XQKKEb91RhPJs59Qh34jho2gkd5v/ALrDlMjYaNm7iGkb8FJH/wAjdQS8YvHwMjZ/K1ZUBIp0It6riOd+73fkPoq19S87n9+aiSRQDHVKydwTBADldxxl2352UYClMThyQxojdGRuiQ4H4W+g1XFO5m7wXdr2RceJZARGA0HyKVlJAToHfhKZXkGD1T2hwaLO1+JJLkPiipqJgeimIiDBYeLmeSFZGLG+h+Sb7OevK6ZJL7tpta3/AGt+ib3QBFhfte4PqF1FSg/ft5hSQxhjg4kOH5d0gJHYQb6OFj1/JH0FA2PW9yVNEQbEG66v3VEMAxQMaQ73Y7lcUUrnnw5GD8TtSPLkFPiFMJBa9iNroCHDnEloe0W7pMpWG0L25sue7rk368/0RzayPOWuOW3O3P8AQKmp6eSKVpLb627a80RiOHuc/M0ix37d0B7oLfVRvPu3bHS4O6go8SMTXxZLg3HlY6FBGgLfGJBZpGp017dVaw1Qy5Q8u11DRa/TVJspL6KWQmR1mjXXTmpaPDpDdxGUN3v+gRMUD3yEMcBl6kX13FxulOZYz7vPdt9zrbX6obSVDSd2c4rTBrASdSAdrancICGie4XAsOp0VrO2C1y98jvS3oFXvqnNJAJDeV9wkmwaJRgjyL5meV9UDNCWmxFv31Uzqk23URnJ7p79i0R5T0XJCsJ4JQ0Oc02OyAJVWSxgE6nZSuIvp89VwxoG4QFEaYBF09K6RwawC5NugTV2HyROLXtsQlYUDZkxCa66aUxDLoBOTfkiTCwNvldfryQUiL7Met/Vc5LEXXdPHmda9grCanga0eIuPyCiUqKUbIHQBpO2g06oOaUk6lSTS2+E6HRNTtvclOImE0IiAu8Xcdgh6tzSTYW+itqKqp44n3bmldseTVWOeHuA6lSnuytcf7J2YpKAAM1gktTS8OwuY1xqALjZJLlAfCZj6inLnaW0C4ponZiN9CkktTE6o2i9ja/fVETlttWtv1bcJkkvZSD8PaRG2/7Cr6mpeJCBvySSTZKHqIpviP5qCKJ5sQfiuL9wkkpKJ308gvd2re5+ik+0yGwAvoDyGp69UkkA3QHVzvcfH5AaWHyVhR0pl1c/IOwJKSSCkRz0wjPgkJNuhXEULnsJL9Qdv1ukkoTspqjujnbE42GYjY22Q0sxkdqkktK0RZJh7IjJZ4OUch+amr6eMPzRfDyv/RJJIpENZir3tax2zdB5KWLCCW5iQPrukkpk6Qorl2Bz0z2m1726KNkJOpSSWiJY5JZaxTSVbnfEST3SSSSsnkyalpc5A2ujK7B/d7G/pZJJJvZrGKcWDU0hiOYAHqDseynnrWki0eU3110PY2SSTZETmKkaQX/7rWGgUFTS7luwNteqSShPZbWiKGB25RkcaZJaGRzLSB2o0K5jotd0kkAJ8ct9Hafvskkkjiiz/9k=",
    categoryId: "coffee",
    isAvailable: true,
    tags: ["coffee", "hot"],
  },
  {
    id: "2",
    name: "Trà Đào Cam Sả",
    slug: "tra-dao-cam-sa",
    description: "Trà đào kết hợp cam sả tươi mát",
    price: 45000,
    image: "https://tse1.mm.bing.net/th/id/OIP.dQn_bnq2pARmIVrXMD4PJwHaFy?pid=Api&P=0&h=2204",
    categoryId: "tea",
    isAvailable: true,
    tags: ["tea", "cold"],
  },
  {
    id: "3",
    name: "Bánh Mousse Chocolate",
    slug: "banh-mousse-chocolate",
    description: "Mousse chocolate mềm mịn thơm béo",
    price: 55000,
    image: "https://i.pinimg.com/1200x/37/df/b8/37dfb8918186fc94a1a4310e26cab233.jpg",
    categoryId: "dessert",
    isAvailable: false,
  },
  {
    id: "4",
    name: "Bánh Mousse Chocolate",
    slug: "banh-mousse-chocolate",
    description: "Mousse chocolate mềm mịn thơm béo phủ lớp cacao đắng nhẹ.",
    price: 55000,
    image: "https://i.pinimg.com/1200x/37/df/b8/37dfb8918186fc94a1a4310e26cab233.jpg",
    categoryId: "dessert",
    isAvailable: false,
  },
  {
    id: "5",
    name: "Tiramisu Cổ Điển",
    slug: "tiramisu-co-dien",
    description: "Bánh Tiramisu Ý truyền thống, vị cà phê và phô mai mascarpone đậm đà.",
    price: 65000,
    image:"https://i.pinimg.com/736x/0e/c2/89/0ec289492947872976c5c52215280faa.jpg",
    categoryId: "dessert",
    isAvailable: true,
  },
  {
    id: "6",
    name: "Kem Vani và Berry",
    slug: "kem-vani-va-berry",
    description: "Kem vani tự làm ăn kèm sốt dâu tây tươi và việt quất.",
    price: 48000,
    image: "https://i.pinimg.com/736x/0e/95/1f/0e951f5e1dff03f8b2869937e0b021c8.jpg",
    categoryId: "dessert",
    isAvailable: true,
  },
  {
    id: "7",
    name: "Bánh Cheesecake Chanh Dây",
    slug: "banh-cheesecake-chanh-day",
    description: "Bánh phô mai nướng với lớp sốt chanh dây chua ngọt tươi mát.",
    price: 60000,
    image: "https://i.pinimg.com/736x/3c/40/54/3c4054907d53e34b478d4625290942e3.jpg", // Hình ảnh Cheesecake Chanh Dây
    categoryId: "dessert",
    isAvailable: true,
  },
  {
    id: "8",
    name: "Panna Cotta Caramen",
    slug: "panna-cotta-caramen",
    description: "Panna Cotta mịn màng kiểu Ý, phủ sốt caramen thơm lừng.",
    price: 52000,
    image: "https://i.pinimg.com/736x/39/3b/eb/393beb2737427e082f4d0f76bbbdec3d.jpg", // Hình ảnh Panna Cotta
    categoryId: "dessert",
    isAvailable: true,
  },
  {
    id: "9",
    name: "Bánh Crepe Sầu Riêng",
    slug: "banh-crepe-saurieng",
    description: "Bánh crepe mềm, nhân kem sầu riêng tươi béo ngậy (Món theo mùa).",
    price: 70000,
    image: "https://i.pinimg.com/1200x/7f/ed/5d/7fed5dafa59c6aff6fdb4ddbc75a41b2.jpg", // Hình ảnh Crepe Sầu Riêng
    categoryId: "dessert",
    isAvailable: false,
  },
];

export default dishes;
