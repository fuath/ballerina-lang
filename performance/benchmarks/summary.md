# Ballerina Performance Test Results

During each release, we execute various automated performance test scenarios and publish the results.

| Test Scenarios | Description |
| --- | --- |
| Passthrough HTTP service | An HTTP Service, which forwards all requests to a back-end service. |
| Passthrough HTTPS service | An HTTPS Service, which forwards all requests to a back-end service. |
| JSON to XML transformation HTTP service | An HTTP Service, which transforms JSON requests to XML and then forwards all requests to a back-end service. |
| JSON to XML transformation HTTPS service | An HTTPS Service, which transforms JSON requests to XML and then forwards all requests to a back-end service. |
| Passthrough HTTP2 (HTTPS) service | An HTTPS Service exposed over HTTP2 protocol, which forwards all requests to a back-end service. |

Our test client is [Apache JMeter](https://jmeter.apache.org/index.html). We test each scenario for a fixed duration of
time. We split the test results into warmup and measurement parts and use the measurement part to compute the
performance metrics.

A majority of test scenarios use a [Netty](https://netty.io/) based back-end service which echoes back any request
posted to it after a specified period of time.

We run the performance tests under different numbers of concurrent users, message sizes (payloads) and back-end service
delays.

The main performance metrics:

1. **Throughput**: The number of requests that the Ballerina service processes during a specific time interval (e.g. per second).
2. **Response Time**: The end-to-end latency for an operation of invoking a Ballerina service. The complete distribution of response times was recorded.

In addition to the above metrics, we measure the load average and several memory-related metrics.

The following are the test parameters.

| Test Parameter | Description | Values |
| --- | --- | --- |
| Scenario Name | The name of the test scenario. | Refer to the above table. |
| Heap Size | The amount of memory allocated to the application | 2G |
| Concurrent Users | The number of users accessing the application at the same time. | 50, 150, 500 |
| Message Size (Bytes) | The request payload size in Bytes. | 50, 1024 |
| Back-end Delay (ms) | The delay added by the back-end service. | 0 |

The duration of each test is **900 seconds**. The warm-up period is **300 seconds**.
The measurement results are collected after the warm-up period.

A [**c5.xlarge** Amazon EC2 instance](https://aws.amazon.com/ec2/instance-types/) was used to install Ballerina.

The following are the measurements collected from each performance test conducted for a given combination of
test parameters.

| Measurement | Description |
| --- | --- |
| Error % | Percentage of requests with errors |
| Average Response Time (ms) | The average response time of a set of results |
| Standard Deviation of Response Time (ms) | The “Standard Deviation” of the response time. |
| 99th Percentile of Response Time (ms) | 99% of the requests took no more than this time. The remaining samples took at least as long as this |
| Throughput (Requests/sec) | The throughput measured in requests per second. |
| Average Memory Footprint After Full GC (M) | The average memory consumed by the application after a full garbage collection event. |

The following is the summary of performance test results collected for the measurement period.

|  Scenario Name | Concurrent Users | Message Size (Bytes) | Back-end Service Delay (ms) | Error % | Throughput (Requests/sec) | Average Response Time (ms) | Standard Deviation of Response Time (ms) | 99th Percentile of Response Time (ms) | Ballerina GC Throughput (%) | Average of Ballerina Memory Footprint After Full GC (M) |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
|  Passthrough HTTP service | 100 | 50 | 0 | 0 | 20535.33 | 4.83 | 6.29 | 36 | 99.46 |  |
|  Passthrough HTTP service | 100 | 1024 | 0 | 0 | 18282.88 | 5.43 | 6.24 | 36 | 99.52 |  |
|  Passthrough HTTP service | 300 | 50 | 0 | 0 | 21398.01 | 13.96 | 10.69 | 62 | 98.64 |  |
|  Passthrough HTTP service | 300 | 1024 | 0 | 0 | 19684.96 | 15.18 | 11.96 | 69 | 98.88 |  |
|  Passthrough HTTP service | 1000 | 50 | 0 | 0 | 20073.33 | 49.75 | 25.14 | 144 | 96.51 |  |
|  Passthrough HTTP service | 1000 | 1024 | 0 | 0 | 18888.57 | 52.86 | 25.76 | 148 | 96.76 |  |
|  Passthrough HTTPS service | 100 | 50 | 0 | 0 | 19296.4 | 5.14 | 6.85 | 39 | 99.47 | 24.467 |
|  Passthrough HTTPS service | 100 | 1024 | 0 | 0 | 15675.77 | 6.33 | 6.04 | 27 | 99.54 | 24.109 |
|  Passthrough HTTPS service | 300 | 50 | 0 | 0 | 19297.52 | 15.49 | 12.18 | 69 | 98.84 | 24.774 |
|  Passthrough HTTPS service | 300 | 1024 | 0 | 0 | 15722.29 | 19.02 | 11.84 | 64 | 99.04 | 24.629 |
|  Passthrough HTTPS service | 1000 | 50 | 0 | 0 | 17430.26 | 57.3 | 27.67 | 155 | 96.9 | 25.807 |
|  Passthrough HTTPS service | 1000 | 1024 | 0 | 0 | 14932.91 | 66.89 | 27.05 | 155 | 97.23 | 25.722 |
|  JSON to XML transformation HTTP service | 100 | 50 | 0 | 0.03 | 136.58 | 732.27 | 1732.43 | 6111 | 14.08 | 1857.948 |
|  JSON to XML transformation HTTP service | 100 | 1024 | 0 | 0 | 160.91 | 621.63 | 1259.11 | 4959 | 13.79 | 1847.303 |
|  JSON to XML transformation HTTP service | 300 | 50 | 0 | 1.36 | 123.53 | 2381.89 | 4476.98 | 30079 | N/A | N/A |
